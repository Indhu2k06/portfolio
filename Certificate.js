// Certificate.js

document.addEventListener("DOMContentLoaded", () => {
  const certificateContainer = document.getElementById("certificate-container");
  const addCertificateBtn = document.getElementById("add-certificate-btn");

  // Existing certificates (you can edit these)
  const certificates = [
    { title: "Full Stack Development", image: "certificate1.jpg" },
    { title: "AI & ML Workshop", image: "certificate2.jpg" }
  ];

  // Function to render certificates
  function renderCertificates() {
    certificateContainer.innerHTML = "";
    certificates.forEach((cert, index) => {
      const certCard = document.createElement("div");
      certCard.className = "certificate-card";
      certCard.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}" class="certificate-img">
        <h3>${cert.title}</h3>
        <button class="edit-btn" onclick="editCertificate(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteCertificate(${index})">Delete</button>
      `;
      certificateContainer.appendChild(certCard);
    });
  }

  // Function to add new certificate
  addCertificateBtn.addEventListener("click", () => {
    const title = prompt("Enter certificate title:");
    const image = prompt("Enter image file name (e.g., certificate3.jpg):");
    if (title && image) {
      certificates.push({ title, image });
      renderCertificates();
    } else {
      alert("Please provide both title and image name!");
    }
  });

  // Edit certificate (global)
  window.editCertificate = function(index) {
    const newTitle = prompt("Edit certificate title:", certificates[index].title);
    const newImage = prompt("Edit image file name:", certificates[index].image);
    if (newTitle && newImage) {
      certificates[index] = { title: newTitle, image: newImage };
      renderCertificates();
    }
  };

  // Delete certificate (global)
  window.deleteCertificate = function(index) {
    if (confirm("Are you sure you want to delete this certificate?")) {
      certificates.splice(index, 1);
      renderCertificates();
    }
  };

  renderCertificates();
});
