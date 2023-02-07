import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardA from './components/CardA/CardA';
import CardB from './components/CardB/CardB';
import Scroll from './components/Scroll/Scroll';
import Footer from './components/Footer/Footer';


function App() {



  return (
    <div>
      <Header />
      <main className='main'>
        <CardA id={1}/>
        <CardB id={1}/>
        <Scroll />
        <CardA id={2}/>
        <CardB id={2}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
