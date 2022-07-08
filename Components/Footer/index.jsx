import React, { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState("")
    return (
        <div id="contact" className='footer-wrapper'>
            <footer>
                <h2>Contact Us</h2>
                <div className='footer-content-container'>
                    <div className='business-location-info'>
                        <img src="/map.png" alt="map" />
                        <div>
                            <p className='business-title'>
                                Ember House
                            </p>
                            <p className='business-phone'>
                                (123)-456-7890
                            </p>
                            <p className='business-address'>
                                1234 Rd
                                Tampa, FL 33606
                            </p>
                        </div>
                    </div>
                    <div className='newsletter'>
                        <fieldset>
                            <label htmlFor='email'>Signup for our Newsletter</label>
                            <input id="email" type="email" placeholder='Stay up to date!' value={email} onChange={() => setEmail(e.target.value)} />
                        </fieldset>
                    </div>
                    <div className='business-hours'>
                        <h4>Hours of Operation:</h4>

                        <div>
                            <p className='day'>Monday - Friday</p>
                            <p className='available-hours'>10am - 11pm</p>
                        </div>
                        <div>
                            <p className='day'>Saturday </p>
                            <p className='available-hours'>10am - 12am</p>
                        </div>
                        <div>
                            <p className='day'>Sunday </p>
                            <p className='available-hours'>11am - 6pm</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer