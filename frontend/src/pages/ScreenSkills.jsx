import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'; //
const ScreenSkills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div>
    <div className="p-4 m-9">
      <h2 className="text-xl font-bold mb-4">All Skills</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill._id} className="bg-white p-4 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img src={`http://localhost:4001/${skill.SkillImage}`} alt="Skill" className="h-40 w-80 object-cover  mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-center">{skill.name}</h3>
            <p className="text-gray-700 text-center">Proficiency: {skill.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ScreenSkills;