import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkData } from './NavLinkData';

import { BsFacebook, BsInstagram, BsTelephoneFill, BsTwitter } from 'react-icons/bs';

const Navigation = () => {
    const router = useRouter();
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [clientWindowWidth, setClientWindowWidth] = useState("")
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        console.log(window.screen.availWidth)
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    const handleResize = () => {
        setClientWindowWidth(window.screen.availWidth);
    }

    return (
        <div className={clientWindowHeight > 50 ? 'navbar-style-wrapper background-fill' : 'navbar-style-wrapper'}>
            <nav id="navigation" className="navbar">
                <div className={clientWindowHeight > 50 ? 'nav-communication-container color-black' : 'nav-communication-container'}>
                    <div className='nav-phone'>
                        <BsTelephoneFill />
                        <span>(123)-456-7890</span>
                    </div>
                    {
                        clientWindowWidth
                            ?
                            <Link href="/">
                                <a className="nav-logo">
                                    <img className="nav-logo" src={clientWindowHeight > 50 ? '/logo-black.png' : '/logo-white.png'} alt="Ember House" width="150" height="80" />
                                </a>
                            </Link>
                            :
                            <Link href="/">
                                <a className="nav-logo">
                                    <img className="nav-logo" src='/logo-white.png' alt="Ember House" width="150" height="80" />
                                </a>
                            </Link>
                    }
                    <button id="mobileMenuTrigger" className={` ${toggleMobileMenu ? 'menuToggle' : ''}`} aria-expanded={toggleMobileMenu ? 'true' : 'false'} aria-controls="navigationLinks"
                        title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </button>
                    <div className='nav-socials'>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsFacebook title="Visit Facebook" /></a></Link>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsInstagram title="Visit Instagram" /></a></Link>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsTwitter title="Visit YouTube" /></a></Link>
                    </div>
                </div>

                <ul className={toggleMobileMenu ? 'nav-list active-links' : 'nav-list'} id="navigationLinks">
                    {
                        NavLinkData.map((link) => (
                            <li key={link?.id} >
                                <Link href={link?.url}>
                                    <a onClick={() => setToggleMobileMenu(false)} className={`${router.pathname === link?.url ? 'active' : ''} ${clientWindowHeight > 50 ? 'color-black' : ''} `}>
                                        {link?.title}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation