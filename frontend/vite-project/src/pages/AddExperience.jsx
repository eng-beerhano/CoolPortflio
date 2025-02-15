import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddExperience = () => {
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [yearsAtWork, setYearsAtWork] = useState('');
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('placeOfWork', placeOfWork);
    formData.append('yearsAtWork', yearsAtWork);
    formData.append('picture', picture);

    try {
      const response = await axios.post('/api/admin/experience', formData, {
        // headers: {
        //   'Content-Type':'multipart/form-data',
        // },
      });
      console.log(response.data);
      navigate('/dashboard/all-experiences'); // Redirect to all experiences page after successful addition
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Place of Work</label>
          <input
            type="text"
            value={placeOfWork}
            onChange={(e) => setPlaceOfWork(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Years at Work</label>
          <input
            type="number"
            value={yearsAtWork}
            onChange={(e) => setYearsAtWork(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            onChange={(e) => setPicture(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Experience
        </button>
      </form>
    </div>
  );
};

export default AddExperience;