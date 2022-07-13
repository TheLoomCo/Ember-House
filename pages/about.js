import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import AboutComp from '../Components/About'
import TeamMember from '../Components/About/TeamMember'
import Footer from '../Components/Footer'
import HeroSection from '../Components/Hero'

const About = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Ember House was started by Marla and Gregg Ember, as a side business and passion project. Their main focus was on their other businesses in the tech and design fields but what they truly loved to do was cook." />
                <link rel="icon" href="/favicon.ico" />
                <title>Ember House | About</title>
            </Head>
            <HeroSection title="About Us" />
            <main className='about-page__wrapper'>
                <AboutComp />
                <h2 id="meetTheTeam" className='team__heading'>The Team</h2>
                <div className='team__wrapper'>
                    <div className='team-members__wrapper'>
                        <TeamMember
                            image="/images/team/marla.webp"
                            member={`
CEO/Head Chef
Marla Ember`}
                        />
                        <TeamMember
                            image="/images/team/greg.webp"
                            member={`
COO/Chef
Gregg Ember`}
                        />
                        <TeamMember
                            image="/images/team/charlie.webp"
                            member={`
Kitchen Manager
Charlie Kelly`}
                        />
                        <TeamMember
                            image="/images/team/rick.webp"
                            member={`
Floor Manager
Rick Sanchez`}
                        />
                        <TeamMember
                            image="/images/team/brock.webp"
                            member={`
Staff Manager
Brock Samson`}
                        />
                        <TeamMember
                            image="/images/team/alex.webp"
                            member={`
Head of Entertainment
Alex Lambert`}
                        />
                        <TeamMember
                            image="/images/team/bubbles.webp"
                            member={`
Head of Marketing
Bubbles`}
                        />
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default About