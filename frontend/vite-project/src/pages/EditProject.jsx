import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProject = ({ project, onClose, onUpdate }) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [link, setLink] = useState(project.link);
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
    setLink(project.link);
    setPicture(null); // Reset the image input
  }, [project]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    if (picture) {
      formData.append('picture', picture);
    }

    try {
      const response = await axios.put(`/api/admin/project/${project._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      onUpdate(response.data.updatedProject); // Call the onUpdate callback with the updated project
      onClose(); // Close the modal after successful update
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
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
          Update Project
        </button>
      </form>
    </div>
  );
};

export default EditProject;