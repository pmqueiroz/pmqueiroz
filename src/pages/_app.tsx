import Header from '../components/header'
import GlobalStyle from '../styles/global';

import styled from "styled-components"
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
   <Wrapper>
      <GlobalStyle />
      <Content>
         <Header />
         <Component {...pageProps} />
      </Content>
      <SideBox/>
   </Wrapper>
  )
}

export default MyApp
