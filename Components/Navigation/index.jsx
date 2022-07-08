import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkData } from './NavLinkData';

import { BsFacebook, BsInstagram, BsTelephoneFill, BsTwitter } from 'react-icons/bs';

const Navigation = () => {
    const router = useRouter();
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    return (
        <div className={clientWindowHeight > 50 ? 'navbar-style-wrapper background-fill' : 'navbar-style-wrapper'}>
            <nav id="navigation" className="navbar">
                <div className={clientWindowHeight > 50 ? 'nav-communication-container color-black' : 'nav-communication-container'}>
                    <div className='nav-phone'>
                        <BsTelephoneFill />
                        <span>(123)-456-7890</span>
                    </div>
                    <Link href="/">
                        <a className="nav-logo">
                            <img src={clientWindowHeight > 50 ? '/logo-black.png' : '/logo-white.png'} alt="Ember House" width="150" height="90" />
                        </a>
                    </Link>
                    <div className='nav-socials'>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsFacebook title="Visit Facebook" /></a></Link>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsInstagram title="Visit Instagram" /></a></Link>
                        <Link href="/"><a className={clientWindowHeight > 50 ? ' color-black' : ''} target="_blank" rel="noreferrer"><BsTwitter title="Visit YouTube" /></a></Link>
                    </div>
                </div>

                <ul className="nav-list">
                    {
                        NavLinkData.map((link) => (
                            <li key={link?.id} >
                                <Link href={link?.url}>
                                    <a className={`${router.pathname === link?.url ? 'active' : ''} ${clientWindowHeight > 50 ? 'color-black' : ''} `}>
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