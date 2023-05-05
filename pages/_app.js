import Footer from '../src/components/footer'
import '../styles/globals.css'
import NavBar from '../src/components/navBar'

function MyApp({ Component, pageProps }) {
  return <div>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}

export default MyApp
