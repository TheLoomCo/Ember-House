import React from 'react'
import Navigation from '../Navigation'

const HeroSection = () => {
    return (
        <section id="heroSection" className="hero-section">
            <div className="parallax"></div>
            {/* <img className='parallax' src="/ember-house-square.png" alt="" /> */}
            <div className="overlay"></div>
            <Navigation />
            <div className="hero-cta">
                <h1>Ember House</h1>
                <a href="#reservation">Reserve Your Seat!</a>
            </div>
        </section>
    )
}

export default HeroSection