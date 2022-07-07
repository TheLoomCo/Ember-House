import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="navbar-style-wrapper">
            <nav id="navigation" className="navbar">
                <Link href="/">
                    <a className="nav-logo">
                        <img src="/ember-house-logo.png" alt="Ember House" />
                    </a>
                </Link>

                <ul className="nav-list">
                    <li>
                        <a href="/" className="active">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation