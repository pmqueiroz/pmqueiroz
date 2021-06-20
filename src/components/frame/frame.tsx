import { Box } from 'rebass'
import styled from 'styled-components'

const Wrapper = styled.iframe`
   width: 90%;
   height: 30rem;
   overflow: hidden;
   border-radius: 20px;
`

export const Frame = ({from, ...rest}: {from: string}) => (
   <Wrapper src={from} {...rest} allowFullScreen style={{overflow: 'hidden'}} height="500" width="500"/>
)