import React from 'react';
import './App.css';
import MyNavbar from './components/myNavbar/mynavbar.component';
import MyCarousal from './components/myCarousel/my-carousel.component';
import TitleMessage from './components/myTitle/title-message.component';
import About from './pages/about/about.component';

const  App= () => {
  return (
    <div>
          <MyNavbar />
          <MyCarousal />
          <TitleMessage />
          <About />
    </div>
  );
}

export default App;
