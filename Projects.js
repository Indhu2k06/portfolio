import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing my academic, technical skills, and achievements.",
    },
    {
      title: "Rainfall Forecasting Model",
      desc: "A machine learning model predicting rainfall using historical and meteorological data.",
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", desc: "" });

  const addProject = () => {
    if (newProject.title && newProject.desc) {
      setProjects([...projects, newProject]);
      setNewProject({ title: "", desc: "" });
    }
  };

  return (
    <motion.div
      className="bg-[#faf3e0] rounded-2xl shadow-lg max-w-5xl mx-auto p-8 border border-[#e4c59e]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-[#7b4f2d]">💼 Projects</h2>
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-[#7b4f2d] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#9e6b3f] transition-all"
        >
          {editMode ? "Save" : "Edit Mode"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-[#fffaf3] p-5 rounded-xl shadow-md border border-[#e4c59e] hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-[#7b4f2d] mb-2">
              📘 {proj.title}
            </h3>
            <p className="text-gray-700">{proj.desc}</p>
          </motion.div>
        ))}
      </div>

      {editMode && (
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold text-[#7b4f2d] mb-2">➕ Add New Project</h4>
          <input
            type="text"
            placeholder="Project Title"
            className="border border-[#e4c59e] rounded-lg p-2 w-full mb-2"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
          <textarea
            placeholder="Project Description"
            className="border border-[#e4c59e] rounded-lg p-2 w-full mb-2"
            value={newProject.desc}
            onChange={(e) =>
              setNewProject({ ...newProject, desc: e.target.value })
            }
          />
          <button
            onClick={addProject}
            className="flex items-center gap-2 bg-[#7b4f2d] text-white px-4 py-2 rounded-lg hover:bg-[#9e6b3f] transition-all"
          >
            <PlusCircle size={18} /> Add Project
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
