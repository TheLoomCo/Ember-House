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
        <div className={clientWindowHeight > 200 ? 'navbar-style-wrapper background-fill' : 'navbar-style-wrapper'}>
            <nav id="navigation" className="navbar">
                <div className={clientWindowHeight > 200 ? 'nav-communication-container color-black' : 'nav-communication-container'}>
                    <div className='nav-phone'>
                        <BsTelephoneFill />
                        <span>(123)-456-7890</span>
                    </div>
                    <Link href="/">
                        <a className="nav-logo">
                            <img src={clientWindowHeight > 200 ? '/logo-black.png' : '/logo-white.png'} alt="Ember House" />
                        </a>
                    </Link>
                    <div className={clientWindowHeight > 200 ? ' nav-socials color-black' : 'nav-socials'}>
                        <BsFacebook title="Visit Facebook" />
                        <BsInstagram title="Visit Instagram" />
                        <BsTwitter title="Visit YouTube" />
                    </div>
                </div>

                <ul className="nav-list">
                    {
                        NavLinkData.map((link) => (
                            <li key={link?.id} >
                                <Link href={link?.url}>
                                    <a className={`${router.pathname === link?.url ? 'active' : ''} ${clientWindowHeight > 200 ? 'color-black' : ''} `}>
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