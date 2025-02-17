import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSkill = () => {
  const [name, setName] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [SkillImage, setSkillImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('proficiency', proficiency);
    formData.append('SkillImage', SkillImage);

    try {
      const response = await axios.post('/api/admin/skill', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      navigate('/dashboard/all-skills'); // Redirect to all skills page after successful addition
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Add Skill</h2>
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
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;