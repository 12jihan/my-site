import '../styles/globals.css';
import 'bulma';
import NavbarComponent from '../components/NavbarComponent';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
