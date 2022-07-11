import React from 'react'
import Navigation from '../Navigation'

const HeroSection = ({ title, cta }) => {
    return (
        <section id="heroSection" className="hero-section">
            <div className="parallax"></div>
            <img className='mobile-img' src="/webp/hero-banner.webp" alt="Ember Grill" />
            <div className="overlay"></div>
            <Navigation />
            <div className="hero-cta">
                <h1>{title}</h1>
                <a href="#reservation">{cta}</a>
            </div>
        </section>
    )
}

export default HeroSection