/* script.js — Clean version
   - Handles uploading & previewing multiple certificates (image/pdf)
   - Saves everything to localStorage
   - Loads saved data on page refresh
*/

document.addEventListener("DOMContentLoaded", () => {
  const certificateInput = document.getElementById("certificateUpload");
  const certificateGallery = document.getElementById("certificateGallery");

  // Section references
  const sections = {
    about: document.querySelector("#about .section-content"),
    projects: document.querySelector("#projects .section-content"),
    education: document.getElementById("educationList"),
    contact: document.getElementById("contactInfo"),
    certificates: certificateGallery
  };

  // --- Certificate Upload & Preview ---
  function previewCertificatesFromFiles(fileList) {
    const files = Array.from(fileList || []);

    files.forEach(file => {
      if (!file.type.startsWith("image/")) {
        if (file.type === "application/pdf") {
          const reader = new FileReader();
          reader.onload = e => {
            const a = document.createElement("a");
            a.href = e.target.result;
            a.target = "_blank";
            a.textContent = "📄 View PDF Certificate";
            a.className = "cert-file-link";
            sections.certificates.appendChild(a);
            saveAll();
          };
          reader.readAsDataURL(file);
        }
        return;
      }

      const reader = new FileReader();
      reader.onload = e => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Certificate";
        img.className = "cert-thumb";
        sections.certificates.appendChild(img);
        saveAll();
      };
      reader.readAsDataURL(file);
    });
  }

  // Input event for certificate uploads
  if (certificateInput) {
    certificateInput.addEventListener("change", ev => {
      previewCertificatesFromFiles(ev.target.files);
      certificateInput.value = ""; // allow re-uploading same file
    });
  }

  // --- Save & Load Functions ---
  function saveAll() {
    try {
      const data = {
        about: sections.about?.innerHTML || "",
        projects: sections.projects?.innerHTML || "",
        education: sections.education?.innerHTML || "",
        contact: sections.contact?.innerHTML || "",
        certificates: sections.certificates?.innerHTML || ""
      };
      localStorage.setItem("indra_portfolio_v1", JSON.stringify(data));
    } catch (err) {
      console.error("Save failed:", err);
    }
  }

  function loadAll() {
    try {
      const raw = localStorage.getItem("indra_portfolio_v1");
      if (!raw) return;
      const data = JSON.parse(raw);

      if (data.about) sections.about.innerHTML = data.about;
      if (data.projects) sections.projects.innerHTML = data.projects;
      if (data.education) sections.education.innerHTML = data.education;
      if (data.contact) sections.contact.innerHTML = data.contact;
      if (data.certificates) sections.certificates.innerHTML = data.certificates;
    } catch (err) {
      console.error("Load failed:", err);
    }
  }

  // Load on page start
  loadAll();

  // Optional: function to clear localStorage manually
  window.clearPortfolioSave = function () {
    if (confirm("Clear saved portfolio data?")) {
      localStorage.removeItem("indra_portfolio_v1");
      location.reload();
    }
  };
});
