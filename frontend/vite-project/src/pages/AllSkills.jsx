import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalWrapper from '../components/ModalWrapper';
import EditSkill from './EditSkill';

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/admin/skills');
        setSkills(response.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/skill/${id}`);
      setSkills(skills.filter((skill) => skill._id !== id));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleEdit = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  const handleUpdate = (updatedSkill) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill._id === updatedSkill._id ? updatedSkill : skill
      )
    );
    closeModal();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Skills</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Skill Name</th>
            <th className="py-2 px-4 border-b">Proficiency</th>
            <th className="py-2 px-4 border-b">Skill Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill._id}>
              <td className="py-2 px-4 border-b">{skill.name}</td>
              <td className="py-2 px-4 border-b">{skill.proficiency}</td>
              <td className="py-2 px-4 border-b">
                <img src={`http://localhost:4001/${skill.SkillImage}`} alt="Skill" className="h-10 w-10 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleEdit(skill)} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => handleDelete(skill._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
        {selectedSkill && <EditSkill skill={selectedSkill} onClose={closeModal} onUpdate={handleUpdate} />}
      </ModalWrapper>
    </div>
  );
};

export default AllSkills;