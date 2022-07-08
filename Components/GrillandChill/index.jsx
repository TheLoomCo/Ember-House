import React, { useState } from 'react'
import Link from 'next/link'
import { ButtonData } from './GrillandChillButtonData'
import { motion } from 'framer-motion'

const GrillandChill = () => {

    const [category, setCategory] = useState('clear filter');


    return (
        <motion.main
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="ember-house-home-main">
            <div className='home-page-headers'>
                <h2 className='text-gradient'>Grill and Chill</h2>
                <h4>Come and see what Ember House has to offer!</h4>
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
                category === "hors d'oeuvres" && (
                    <div className='menu-preview'>
                        <h2>Hors D'oeuvres</h2>
                        <a href="/placeholder-menu.png" download="placeholder-image"><img src="/placeholder-menu.png" alt="" /></a>
                    </div>
                )
            }
            {
                category === "entrees" && (
                    <div
                        className='menu-preview'>
                        <h2>Entrees</h2>
                        <a href="" download="placeholder-menu"><img src="/placeholder-menu.png" alt="" /></a>
                    </div>
                )
            }
            {
                category === "desserts" && (
                    <div className='menu-preview'>
                        <h2>Desserts</h2>
                        <a href="" download="placeholder-image"><img src="/placeholder-menu.png" alt="" /></a>
                    </div>
                )
            }
            {
                category === "cocktails" && (
                    <div className='menu-preview'>
                        <h2>Cocktails</h2>
                        <a href="" download="placeholder-image"><img src="/placeholder-menu.png" alt="" /></a>
                    </div>
                )
            }
            {
                category === "wine" && (
                    <div className='menu-preview'>
                        <h2>Wine</h2>
                        <a href="" download="placeholder-image"><img src="/placeholder-menu.png" alt="" /></a>
                    </div>
                )
            }
            {
                category === 'clear filter' && (
                    <div

                        className='menu-preview-section'>

                        <img src="/entrees.png" alt="entrees" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                        </p>
                        <img src="/cocktails.png" alt="cocktails" />

                        <img src="/entertainment.png" alt="entertainment" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar neque neque, sit amet scelerisque enim mollis vel. Vestibulum sagittis lacus nec turpis consequat, vel pellentesque quam venenatis.
                        </p>
                    </div>
                )
            }
        </motion.main>
    )
}

export default GrillandChill