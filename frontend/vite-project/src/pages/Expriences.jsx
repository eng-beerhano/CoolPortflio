import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'; //
const AllExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState('');

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
    <div>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 mt-9">Here is   My Experiences</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {experiences.map((experience) => (
          <div key={experience._id} className="bg-white p-4 rounded-lg  shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img src={`http://localhost:4001/${experience.picture}`} alt="Experience" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">{experience.placeOfWork}</h3>
            <p className="text-gray-700 mb-2">Years at Work: {experience.yearsAtWork}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AllExperiences;