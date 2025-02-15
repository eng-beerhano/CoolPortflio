import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomeExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState('');
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

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Here are some of My Experiences</h2>
      {error && <p className="text-red-500 mb-6 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {experiences.slice(0, 6).map((experience) => (
          <div
            key={experience._id}
            className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <img
              src={`http://localhost:4001/${experience.picture}`}
              alt="Experience"
              className="h-40 object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{experience.placeOfWork}</h3>
            <p className="text-gray-600 mb-4">Years at Work: {experience.yearsAtWork}</p>
            {/* <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition duration-300">
                View Details
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/expriences')}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 w-80"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeExperience;
