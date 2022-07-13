import Head from 'next/head'
import Footer from '../Components/Footer'
import GrillandChill from '../Components/GrillandChill'
import HeroSection from '../Components/Hero'
import Reservation from '../Components/Reservation'
import AboutComp from '../Components/About'
export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Join us for an unforgettable grill experience at the one and only: Ember House. Our kitchen is graced by some of the greatest Chefs in the world, creating unrivaled dishes for your dining pleasure." />
        <link rel="icon" href="/favicon.ico" />
        <title>Ember House | Home</title>
      </Head>

      {/* Home Page */}
      <HeroSection title="Ember House" cta="Reserve Your Seat!" />
      <GrillandChill />
      <Reservation />
      <AboutComp />
      <Footer />
    </>
  )
}
