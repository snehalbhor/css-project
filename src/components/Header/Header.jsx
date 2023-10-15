import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className="h-wrapper">
                <div className=" flexCenter paddings innerWidth h-container">
                    <img src="./logo.png" alt="logo" width={100} className="src" />
                    <div className="flexCenter h-menu">
                        <a href="/" className='residence'>Residencies</a>
                        <a href="/" className='residence'>Our Values</a>
                        <a href="/" className='residence'>Contact Us</a>
                        <a href="/" className='residence'>Get Started</a>
                        <button className="button">
                            <a href="/" className='residence'>Contact</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
