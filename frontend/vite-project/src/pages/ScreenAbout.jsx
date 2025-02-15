import React from 'react';
// import backgroundVideo from '../assets/background-video.mp4'; // Update the path to your background video
import AboutMe from '../pages/aboutPage';
import profilePic from '../assets/profile-pic.jpeg'; // Update the path to your profile picture
import Footer from '../components/Footer'; //
import backgroundVideo from '../assets/background-video.mp4'; // Update the path to your background video


const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDB', level: 70 },
];
const ScreenAbout = () => {
  return (
    <div>
    <div>
    <section className="bg-gray-100 text-black py-10 px-5 md:px-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 flex justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-48 h-48 border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Right: About Me Info */}
      <div className="md:w-2/3 mt-11 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold mb-3 mt-3">About Me</h2>
        <p className="text-gray-700 mb-5">
          I am a passionate software engineer with experience in building web applications using modern technologies. I love solving complex problems and creating efficient solutions.
        </p>

        {/* Skill Bars */}
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <span className="text-lg">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      {/* Background Video */}
    </section>
     {/* <h1 className="justify-center text-center font-bold relative top-96 text-5xl text-white">i'm Softweer Engineer in Mogadishu</h1>
     <video playsInline autoPlay muted loop className="justify-center  my-24 w-{300px} mt-4 w-full">
     <source src={backgroundVideo} type="video/mp4" />
   </video> */}
   </div>
   <Footer/>
      </div> 
  );
};

export default ScreenAbout;