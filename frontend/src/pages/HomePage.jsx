import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import React from 'react'
import AboutMe from './AboutPage'
import HomeExperience from '../components/HomeExperience'
import HomeProjects from '../components/HomeProjects'
import HomeSkills from '../components/HomeSkills'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <HomeExperience />
      <HomeProjects />
      <HomeSkills/>
       <Footer/>
      <Outlet/>
    </div>
  )
}

export default HomePage