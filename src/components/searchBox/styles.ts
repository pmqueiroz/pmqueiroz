// Packages
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
   width: 23rem;
   height: 4rem;
   border-radius: 2rem;
   background: ${props => props.theme.colors.darkBlue};
   padding: 0 2rem;
   align-items: center;
   display: flex;
   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`
export const Input = styled.input`
   background: ${props => props.theme.colors.darkBlue};
   color: ${props => props.theme.colors.white};
   margin-left: 1rem;
   flex: 1;
   height: 100%;

   &::placeholder{
      color: ${props => props.theme.colors.white};
   }
`