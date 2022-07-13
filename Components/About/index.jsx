import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AboutComp = () => {

    const router = useRouter();

    const aboutPage = router.pathname === '/about';

    return (
        <div id="about" className='about-comp__wrapper'>
            <h2 className='about-restaurant__heading'>The Restaurant</h2>
            <div className='image__wrapper'>
                <Image
                    className='about-primary__img'
                    alt="Ember House"
                    src="/images/about/about-img.png"
                    height={479}
                    width={850}
                />
            </div>
            <p className='restaurant__biography'>
                Ember House was started by Marla and Gregg Ember, as a side business and passion project. Their main focus was on their other businesses in the tech and design fields but what they truly loved to do was cook. They would take their delicious offerings to markets and events where they would regularly sell out. Ultimately, the Husband - Wife team decided to chase their dream full time and opened Ember House in 2019.
            </p>

            <Link href="/about#meetTheTeam"><a className={aboutPage ? 'meet-our-team__btn btn__hide' : 'meet-our-team__btn'}>Meet Our Team</a></Link>
        </div>
    )
}

export default AboutComp