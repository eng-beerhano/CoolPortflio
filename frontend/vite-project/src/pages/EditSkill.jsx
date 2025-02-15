import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditSkill = ({ skill, onClose, onUpdate }) => {
  const [name, setName] = useState(skill.name);
  const [proficiency, setProficiency] = useState(skill.proficiency);
  const [SkillImage, setSkillImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setName(skill.name);
    setProficiency(skill.proficiency);
    setSkillImage(null); // Reset the image input
  }, [skill]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('proficiency', proficiency);
    if (SkillImage) {
      formData.append('SkillImage', SkillImage);
    }

    try {
      const response = await axios.put(`/api/admin/skill/${skill._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      onUpdate(response.data.updatedSkill); // Call the onUpdate callback with the updated skill
      onClose(); // Close the modal after successful update
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Edit Skill</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Skill Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Proficiency</label>
          <input
            type="text"
            value={proficiency}
            onChange={(e) => setProficiency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Skill Image</label>
          <input
            type="file"
            onChange={(e) => setSkillImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Update Skill
        </button>
      </form>
    </div>
  );
};

export default EditSkill;