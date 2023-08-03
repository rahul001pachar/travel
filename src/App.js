import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Destinations from './Components/Destinations';
import Search from './Components/Search';
import Selects from './Components/Selects';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>    
    </>
  );
}

export default App;
