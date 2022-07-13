import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonData } from './GrillandChillButtonData';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const GrillandChill = () => {

    const router = useRouter();

    const [category, setCategory] = useState('clear filter');
    const [menuShow, setMenuShow] = useState(false);

    const handleClick = (button) => {
        setCategory(button.title);
        setMenuShow(true);

        router.push(button.id);
    }

    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="grill-and-chill__wrapper"
            id="menu">
            <div className='grill-and-chill__headers'>
                <h2 className='text-gradient'>Grill and Chill</h2>
                <h3>Come and see what <br /> Ember House has to offer!</h3>
            </div>
            <div className='category-btns'>
                {
                    ButtonData.map((button, index) => (
                        <button key={button.title}
                            className={menuShow === index ? 'show-menu' : ''}
                            onClick={() => handleClick(button)}>{button.title}</button>
                    ))
                }
            </div>

            {/* Menu Preview */}
            {
                category === "hors d'oeuvres & entrees" && (
                    <div id="entrees" className='menu-preview'>
                        <h2>Hors D'oeuvres & Entrees</h2>
                        <Image src="/images/menu/hors-doeuvres-entrees.webp" alt="Hors D'ouevres and Entrees" height={1000} width={773} />
                    </div>
                )
            }

            {
                category === "desserts and sides" && (
                    <div id="desserts" className='menu-preview'>
                        <h2>Desserts & Sides</h2>
                        <Image src="/images/menu/desserts-sides.webp" alt="Desserts and Sides" height={1000} width={773} />
                    </div>
                )
            }
            {
                category === "drinks / cocktails / wines" && (
                    <div id="drinks" className='menu-preview'>
                        <h2>Drinks / Cocktails / Wines</h2>
                        <Image src="/images/menu/drinks.webp" alt="Drinks, Cocktails, & Wine" height={1000} width={773} />
                    </div>
                )
            }
            {
                category === 'clear filter' && (
                    <div
                        className='trifecta-descriptions'>

                        <div className='trifecta__container'>
                            <Image src="/webp/19.webp" alt="entrees" height={250} width={444} />
                            <p>
                                Join us for an unforgettable grill experience at the one and only: Ember House. Our kitchen is graced by some of the greatest Chefs in the world, creating unrivaled dishes for your dining pleasure. We have a range of grilled, fried and seafood offerings and they are cooked using the finest ingredients.
                            </p>
                        </div>

                        <div className='trifecta__container'>
                            <p>
                                Take the edge off with our lengthy cocktail menu or recline and luxuriate with our selection of fine wines. Whatever your pleasure, we can pour it up.
                            </p>
                            <Image src="/webp/2.webp" alt="cocktails" height={250} width={444} />

                        </div>
                        <div className='trifecta__container'>
                            <Image src="/webp/10.webp" alt="entertainment" height={250} width={444} />
                            <p>
                                Ember House is home to a world class stage that boasts world renowned entertainers. Musicians, bands, comedians and speakers take to the stage to show the world what they've got. The essence of "Grill & Chill."
                            </p>
                        </div>
                    </div>
                )
            }
        </motion.section>
    )
}

export default GrillandChill