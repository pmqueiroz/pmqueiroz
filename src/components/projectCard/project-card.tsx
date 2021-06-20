import { Box, Text } from "rebass/styled-components"
import styled from "styled-components"

const Wrapper = styled(Box)`
   width: 100%;
   height: 20rem;
   background-color: #fff;
   border-radius: 2rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: start;
   padding: 10%;
   cursor: pointer;
   transition: transform 0.2s;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

   &:hover{
      transform: translate(0, -2rem)
   }
`
interface ProjectCardProps {
   name: string
   description: string
}

export const ProjectCard = (props: ProjectCardProps) => {
   const { name, description } = props

   return (
      <Wrapper>
         <Text fontWeight="bold" fontSize="large">{name}</Text>
         <Text>{description}</Text>
      </Wrapper>
   )
}