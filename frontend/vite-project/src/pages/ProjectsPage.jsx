import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

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
    <div className="">
    <div className="p-8 mt-4">
      <h2 className="text-2xl font-bold mb-6 ">All Projects</h2>
      {error && <p className="text-red-500 mb-6">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-6 rounded-lg  shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img src={`http://localhost:4001/${project.picture}`} alt="Project" className="h-48 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                See this Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
        </div>

  );
};

export default ProjectsPage;