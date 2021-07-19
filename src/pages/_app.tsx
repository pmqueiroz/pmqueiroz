import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import Header from '../components/header'
import GlobalStyle from '../styles/global'
import { SideBox } from "../components/sideBox/side-box"

const Wrapper = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
`

const Content = styled.div`
   flex: 1;
`

function MyApp({ Component, pageProps }) {
  return (
     <ThemeProvider theme={theme}>
      <Wrapper>
         <GlobalStyle />
         <Content>
            <Header />
            <Component {...pageProps} />
         </Content>
         <SideBox/>
      </Wrapper>
     </ThemeProvider>
  )
}

export default MyApp
