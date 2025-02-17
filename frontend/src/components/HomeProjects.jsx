import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomeProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/admin/projects');
        setProjects(response.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Some of My Projects</h2>
      {error && <p className="text-red-500 mb-6">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project) => ( // Display only the first 6 projects
          <div key={project._id} className="bg-white p-6 rounded-lg  shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img src={`http://localhost:4001/${project.picture}`} alt="Project" className="h-48 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/Screenprojects')}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 w-80"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;