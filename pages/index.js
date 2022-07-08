import Head from 'next/head'
import Footer from '../Components/Footer'
import GrillandChill from '../Components/GrillandChill'
import HeroSection from '../Components/Hero'
import Reservation from '../Components/Reservation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Page */}
      <HeroSection />
      <GrillandChill />
      <Reservation />
      <Footer />
    </>
  )
}
