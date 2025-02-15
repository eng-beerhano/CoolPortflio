import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalWrapper from '../components/ModalWrapper';
import EditProject from './EditProject';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/project/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleUpdate = (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      )
    );
    closeModal();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Projects</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Link</th>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="py-2 px-4 border-b">{project.title}</td>
              <td className="py-2 px-4 border-b">{project.description}</td>
              <td className="py-2 px-4 border-b">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {project.link}
                </a>
              </td>
              <td className="py-2 px-4 border-b">
                <img src={`http://localhost:4001/${project.picture}`} alt="Project" className="h-10 w-10 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleEdit(project)} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => handleDelete(project._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
        {selectedProject && <EditProject project={selectedProject} onClose={closeModal} onUpdate={handleUpdate} />}
      </ModalWrapper>
    </div>
  );
};

export default AllProjects;