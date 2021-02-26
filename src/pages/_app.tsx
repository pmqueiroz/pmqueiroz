import Header from '../components/header'
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
   <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
   </>
  )
}

export default MyApp
