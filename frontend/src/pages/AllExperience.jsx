import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ModalWrapper from '../components/ModalWrapper';
import EditExperience from './EditExperience';

const AllExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/api/admin/get-experiences');
        setExperiences(response.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchExperiences();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/experience/${id}`);
      setExperiences(experiences.filter((experience) => experience._id !== id));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Experiences</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Place of Work</th>
            <th className="py-2 px-4 border-b">Years at Work</th>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience) => (
            <tr key={experience._id}>
              <td className="py-2 px-4 border-b">{experience.placeOfWork}</td>
              <td className="py-2 px-4 border-b">{experience.yearsAtWork}</td>
              <td className="py-2 px-4 border-b">
                <img src={`http://localhost:4001/${experience.picture}`} alt="Experience" className="h-20 w-20 object-cover" />
                {/* <img src={`http://localhost:5000/${course.content}`} alt={course.title} className="w-full h-48 object-cover mb-2 rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'default-image.jpg'; }} /> */}

              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleEdit(experience)} className="text-white bg-green-500 p-2 rounded-xl mr-4">Edit</button>
                <button onClick={() => handleDelete(experience._id)} className="text-white bg-red-500 p-2 rounded-xl">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
        {selectedExperience && <EditExperience experience={selectedExperience} onClose={closeModal} />}
      </ModalWrapper>
    </div>
  );
};

export default AllExperiences;