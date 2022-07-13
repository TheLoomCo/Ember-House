import '../styles/globals.css';
import '../Components/Navigation/navbar.modules.css';
import '../Components/Hero/hero.modules.css';
import '../Components/GrillandChill/grillandchill.modules.css';
import '../Components/Reservation/reservation.modules.css';
import '../Components/Footer/footer.modules.css';

// About Page
import '../styles/about-page.css'

// About Component
import '../Components/About/about.modules.css';
import '../Components/About/TeamMember/team-member.modules.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* OG Image */}
        <meta property="og:title" content="Ember house grille" />
        <meta property="og:site_name" content="Ember House Grille" />
        <meta property="og:url" content="https://ember-house.vercel.app" />
        <meta property="og:description" content="Our kitchen is graced by some of the greatest Chefs in the world, creating unrivaled dishes for your dining pleasure." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:image" content="https://res.cloudinary.com/aladd93/image/upload/v1657677581/Ember-House-Logo_1_pol38i.png" />

        {/* Favicon */}


        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />


      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
