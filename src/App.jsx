// import logo from './logo.svg';
import './App.css';
import React from "react";
import Companies from './components/Companies/Companies';
import Header from './components/Header/Header';
import Hero from './components/Herosection/Hero';
import Recidencies from './components/Recidencies/Recidencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header />
      <Hero/>
      </div>
      <Companies/>
      <Recidencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
