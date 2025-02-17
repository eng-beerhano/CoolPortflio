import  Send  from '../components/Send'
import ContectHero from '../components/ContectHero'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const ContectPage = () => {
  return (
    <div>
       <ContectHero/>
       <Send/>
       {/* <Footer/> */}
        <Outlet/>
    </div>
  )
}

export default ContectPage