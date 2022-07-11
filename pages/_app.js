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

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
