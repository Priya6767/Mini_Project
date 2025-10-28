import React from 'react'
import Navbar from '../components/Navbar';  
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Footer from '../components/Footer';
// import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    
     <div className="w-full min-h-screen bg-gray-50">
    <Navbar/>
    <HeroSection/>  
    <Section/>
    <Footer/>
    {/* <Dashboard/> */}
     </div>
  );
}; 

export default Home