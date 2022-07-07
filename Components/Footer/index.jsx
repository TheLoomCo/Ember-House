import React from 'react'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <footer>
                <h2>Contact Us</h2>
                <div className='footer-content-container'>
                    <img src="/map.png" alt="map" />
                    <div className='business-location-info'>
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
                    <div className='business-hours'>
                        <p>Hours of Operation:</p>

                        <div>
                            <p>Monday - Friday</p>
                            <p>10am-11pm</p>
                        </div>
                        <div>
                            <p>Saturday </p>
                            <p>10am-12am</p>
                        </div>
                        <div>
                            <p>Sunday </p>
                            <p>11am-6pm</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer