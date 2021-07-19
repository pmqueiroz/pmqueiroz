import { createRef, useEffect } from 'react'
import styled from 'styled-components'


const Wrapper = styled.iframe`
   width: 90%;
   height: 30rem;
   border-radius: 20px;
   padding-right: 25px;
   box-sizing: content-box;
`

const Container = styled.div`
   width: 90%;
   height: 30rem;
   border-radius: 20px;
   padding-right: 25px;
   box-sizing: content-box;
`



export const Frame = ({from, ...rest}: {from: string}) => {
   const frameRef = createRef<HTMLIFrameElement>()

   useEffect(() => {
      const clientWidth = frameRef.current.clientWidth
      const offsetWidth = frameRef.current.offsetWidth

      console.log(offsetWidth - clientWidth)
   }, [])

   return (
      <Wrapper 
         src={from}
         allowFullScreen
         allowTransparency
         sandbox="allow-forms allow-modals allow-pointer-lock allow-presentation allow-same-origin allow-scripts"
         height="500" width="500"
         ref={frameRef}
         {...rest}
      />
   )
}

//sandbox="allow-forms allow-modals allow-pointer-lock allow-presentation allow-same-origin allow-scripts"