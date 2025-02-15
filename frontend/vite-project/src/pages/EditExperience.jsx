import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditExperience = ({ experience, onClose }) => {
  const [placeOfWork, setPlaceOfWork] = useState(experience.placeOfWork);
  const [yearsAtWork, setYearsAtWork] = useState(experience.yearsAtWork);
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('placeOfWork', placeOfWork);
    formData.append('yearsAtWork', yearsAtWork);
    if (picture) {
      formData.append('picture', picture);
    }

    try {
      const response = await axios.put(`/api/admin/experience/${experience._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      onClose(); // Close the modal after successful update
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Edit Experience</h2>
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
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Update Experience
        </button>
      </form>
    </div>
  );
};

export default EditExperience;