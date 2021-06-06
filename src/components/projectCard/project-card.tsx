import { Box } from "rebass/styled-components"
import styled from "styled-components"

const Wrapper = styled(Box)`
   width: 15rem;
   height: 15rem;
   background-color: #fff;
   border-radius: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
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
         <p>{name}</p>
         <p>{description}</p>
      </Wrapper>
   )
}