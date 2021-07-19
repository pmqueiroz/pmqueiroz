import styled from 'styled-components'

import { Frame } from '../'


const Wrapper = styled.div`
   width: 33vw;
   background: ${props => props.theme.colors.lightGray};
   height: 100%;
   display: flex;
   justify-content: start;
   flex-direction: column;
   align-items: center;
   padding-top: 5rem;
`

export const SideBox = () => {
   return (
      <Wrapper>
         <Frame from="https://pawee.space" />
      </Wrapper>
   )
}