import React, { useState } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({
    school: "PMG Huxley School",
    tenth: "92%",
    twelfth: "89%",
    cutoff: "187.5",
  });

  return (
    <motion.div
      className="bg-[#faf3e0] rounded-2xl shadow-lg max-w-4xl mx-auto p-8 border border-[#e4c59e] mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-[#7b4f2d]">🎓 Education</h2>
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-[#7b4f2d] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#9e6b3f] transition-all"
        >
          {editMode ? "Save" : "Edit Mode"}
        </button>
      </div>

      {!editMode ? (
        <div className="space-y-3 text-gray-700">
          <p>🏫 <b>School:</b> {details.school}</p>
          <p>📘 <b>10th Marks:</b> {details.tenth}</p>
          <p>📗 <b>12th Marks:</b> {details.twelfth}</p>
          <p>💯 <b>Cutoff:</b> {details.cutoff}</p>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            className="w-full border border-[#e4c59e] rounded-lg p-2"
            value={details.school}
            onChange={(e) =>
              setDetails({ ...details, school: e.target.value })
            }
            placeholder="School Name"
          />
          <input
            className="w-full border border-[#e4c59e] rounded-lg p-2"
            value={details.tenth}
            onChange={(e) =>
              setDetails({ ...details, tenth: e.target.value })
            }
            placeholder="10th Percentage"
          />
          <input
            className="w-full border border-[#e4c59e] rounded-lg p-2"
            value={details.twelfth}
            onChange={(e) =>
              setDetails({ ...details, twelfth: e.target.value })
            }
            placeholder="12th Percentage"
          />
          <input
            className="w-full border border-[#e4c59e] rounded-lg p-2"
            value={details.cutoff}
            onChange={(e) =>
              setDetails({ ...details, cutoff: e.target.value })
            }
            placeholder="Cutoff"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Education;
