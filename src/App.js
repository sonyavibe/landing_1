import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardA from './components/CardA/CardA';
import CardB from './components/CardB/CardB';
import Scroll from './components/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {



  return (
    <div className='app_container'>
      <ParallaxProvider>
        <Header />
      
        <CardA id={1}/>
        <CardB id={1}/>
        <Scroll />
        <CardA id={2}/>
        <CardB id={2}/>
   
        <Footer />
      </ParallaxProvider>
      
    </div>
  );
}

export default App;
