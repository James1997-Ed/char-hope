import Footer from '../src/components/footer'
import '../styles/globals.css'
import NavBar from '../src/components/navBar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function MyApp({ Component, pageProps }) {
  return <div>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}

export default MyApp
