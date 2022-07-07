import React, { useState } from 'react'
import Link from 'next/link'
import { ButtonData } from './GrillandChillButtonData'

const GrillandChill = () => {

    const [category, setCategory] = useState('clear filter')

    return (
        <main className="ember-house-home-main">
            <div className='home-page-headers'>
                <h2>Grill and Chill</h2>
                <h4>Come and see what Ember House has to offer!</h4>
            </div>
            <div className='category-btns'>
                {
                    ButtonData.map((button) => (
                        <button onClick={
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
                        <img src="/placeholder-menu.png" alt="" />
                    </div>
                )
            }
            {
                category === "entrees" && (
                    <div className='menu-preview'>
                        <h2>Entrees</h2>
                        <img src="/placeholder-menu.png" alt="" />
                    </div>
                )
            }
            {
                category === "desserts" && (
                    <div className='menu-preview'>
                        <h2>Desserts</h2>
                        <img src="/placeholder-menu.png" alt="" />
                    </div>
                )
            }
            {
                category === "cocktails" && (
                    <div className='menu-preview'>
                        <h2>Cocktails</h2>
                        <img src="/placeholder-menu.png" alt="" />
                    </div>
                )
            }
            {
                category === "wine" && (
                    <div className='menu-preview'>
                        <h2>Wine</h2>
                        <img src="/placeholder-menu.png" alt="" />
                    </div>
                )
            }
            {
                category === 'clear filter' && (
                    <div className='menu-preview-section'>

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
        </main >
    )
}

export default GrillandChill