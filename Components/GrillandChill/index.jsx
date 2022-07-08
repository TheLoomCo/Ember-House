import React, { useState } from 'react'
import Link from 'next/link'
import { ButtonData } from './GrillandChillButtonData'
import { motion } from 'framer-motion'

const GrillandChill = () => {

    const [category, setCategory] = useState('clear filter');


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
                        <a href="/hors-doeuvres-entrees.avif" download="Hors D'ouevres and Entrees"><img src="/hors-doeuvres-entrees.avif" alt="Hors D'ouevres and Entrees" height="1000" width="773" /></a>
                    </div>
                )
            }

            {
                category === "desserts and sides" && (
                    <div className='menu-preview'>
                        <h2>Desserts & Sides</h2>
                        <a href="/desserts-sides.avif" download="Dessert and Sides"><img src="/desserts-sides.avif" alt="Desserts and Sides" height="1000" width="773" /></a>
                    </div>
                )
            }
            {
                category === "drinks / cocktails / wines" && (
                    <div className='menu-preview'>
                        <h2>Drinks / Cocktails / Wines</h2>
                        <a href="/drinks.avif" download="Drinks"><img src="/drinks.avif" alt="Drinks, Cocktails, & Wine" height="1000" width="773" /></a>
                    </div>
                )
            }
            {
                category === 'clear filter' && (
                    <div
                        className='menu-preview-section'>

                        <div className='menu-preview-food'>
                            <img src="/1.avif" alt="entrees" height="250" width="444" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                            </p>
                        </div>

                        <div className='menu-preview-drinks'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                            </p>
                            <img src="/18.avif" alt="cocktails" height="250" width="444" />

                        </div>
                        <div className='menu-preview-entertainment'>
                            <img src="/20.avif" alt="entertainment" height="250" width="444" />
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