import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkData } from './NavLinkData';

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


    // useEffect(() => {
    //     let backgroundTransparacyVar = clientWindowHeight / 600;

    //     if (backgroundTransparacyVar < 1) {
    //         let paddingVar = 30 - backgroundTransparacyVar * 20;
    //         let boxShadowVar = backgroundTransparacyVar * 0.1;
    //         setBackgroundTransparacy(backgroundTransparacyVar);
    //         setPadding(paddingVar);
    //         setBoxShadow(boxShadowVar);
    //     }
    // }, [clientWindowHeight]);

    return (
        <div className={clientWindowHeight > 200 ? 'navbar-style-wrapper background-fill' : 'navbar-style-wrapper'}>
            <nav id="navigation" className="navbar">
                <Link href="/">
                    <a className="nav-logo">
                        <img src={clientWindowHeight > 200 ? '/logo-black.png' : '/logo-white.png'} alt="Ember House" />
                    </a>
                </Link>

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