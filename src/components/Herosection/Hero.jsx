import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
  <section className="hero-wrapper">
  <div className="paddings innerWidth flexCenter hero-container ">
    {/* LEFT SIDE */}
    <div className="flexColStart hero-left">
      <div className="hero-title">
        <div className="orange-circle"/>
        <h1>
          Discover <br/> Most Suitable <br/> Property
        </h1>
      </div>
      <div className="flexColStart hero-des">
        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
      </div>
      <div className="flexCenter search-bar">
        <HiLocationMarker color="blue" size="25px"/>
        <input type="text"/>
        <button className="button">Search</button>
      </div>
      <div className="flexCenter stats">
        <div className="flexColCenter stat">
          <span>
            <CountUp start={8800} end={9000} duration={4}/>
            <span>+</span>
          </span>
          <span className='secondaryText'>Premium Product</span>
        </div>
      
     
        <div className="flexColCenter stat">
          <span>
            <CountUp start={1950} end={2000} duration={4}/>
            <span>+</span>
          </span>
          <span className='secondaryText'>Happy Customers</span>
        </div>
        <div className="flexColCenter stat">
          <span>
            <CountUp end={28}/>
            <span>+</span>
          </span>
          <span className='secondaryText'>Award Winings</span>
        </div>
        </div>
    </div>
    {/* RIGHT SIDE */}
        <div className="image-container">
            <img src="./mumbai.jpg" alt="" className="src" />
        </div>

  </div>
  </section>
  )
}

export default Hero
