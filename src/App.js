import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Destinations from './Components/Destinations';
import Search from './Components/Search';
import Selects from './Components/Selects';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
    </>
  );
}

export default App;
