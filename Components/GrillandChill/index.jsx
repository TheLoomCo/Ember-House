import React, { useState } from 'react'
import Link from 'next/link'
import { ButtonData } from './GrillandChillButtonData'
import { motion } from 'framer-motion'

const GrillandChill = () => {

    const [category, setCategory] = useState('clear filter');

    const handleDownload = () => {
        console.log('downloaded');
    }


    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="grill-and-chill"
            id="menu">
            <div className='grill-and-chill-headers'>
                <h2 className='text-gradient'>Grill and Chill</h2>
                <h3>Come and see what <br /> Ember House has to offer!</h3>
            </div>
            <div className='category-btns'>
                {
                    ButtonData.map((button) => (
                        <button key={button.title} onClick={
                            () => setCategory(button.title)
                        }>{button.title}</button>
                    ))
                }
            </div>

            {/* Menu Preview */}
            {
                category === "hors d'oeuvres & entrees" && (
                    <div className='menu-preview'>
                        <h2>Hors D'oeuvres & Entrees</h2>
                        <a onClick={handleDownload} href="/" download="Hors D'ouevres and Entrees"><img src="/webp/hors-doeuvres-entrees.webp" alt="Hors D'ouevres and Entrees" height="1000" width="773" /></a>
                    </div>
                )
            }

            {
                category === "desserts and sides" && (
                    <div className='menu-preview'>
                        <h2>Desserts & Sides</h2>
                        <a href="/" download="Dessert and Sides"><img src="/webp/desserts-sides.webp" alt="Desserts and Sides" height="1000" width="773" /></a>
                    </div>
                )
            }
            {
                category === "drinks / cocktails / wines" && (
                    <div className='menu-preview'>
                        <h2>Drinks / Cocktails / Wines</h2>
                        <a href="/" download="Drinks"><img src="/webp/drinks.webp" alt="Drinks, Cocktails, & Wine" height="1000" width="773" /></a>
                    </div>
                )
            }
            {
                category === 'clear filter' && (
                    <div
                        className='menu-preview-section'>

                        <div className='menu-preview-food'>
                            <img src="/webp/1.webp" alt="entrees" height="250" width="444" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                            </p>
                        </div>

                        <div className='menu-preview-drinks'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                            </p>
                            <img src="/webp/18.webp" alt="cocktails" height="250" width="444" />

                        </div>
                        <div className='menu-preview-entertainment'>
                            <img src="/webp/20.webp" alt="entertainment" height="250" width="444" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                            </p>
                        </div>
                    </div>
                )
            }
        </motion.section>
    )
}

export default GrillandChill