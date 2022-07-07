import React from 'react'
import Link from 'next/link'

const GrillandChill = () => {
    return (
        <main className="ember-house-home-main">
            <div className='home-page-headers'>
                <h2>Grill and Chill</h2>
                <h4>Come and see what Ember House has to offer!</h4>
            </div>
            <div className='category-btns'>
                <button>hors d'oeuvres</button>
                <button>entrees</button>
                <button>desserts</button>
                <button>cocktails</button>
                <button>wine</button>
            </div>

            {/* Menu Preview */}
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
        </main>
    )
}

export default GrillandChill