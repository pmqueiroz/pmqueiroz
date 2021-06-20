import styled from "styled-components"

import { ProjectCard } from "../components"

const Wrapper = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   align-items: center;
   justify-items: center;
   gap: 5rem;
   padding: 0 5rem;
`

const sla = [1, 2, 3, 4, 5, 6, 7, 8]

const Projects = () => {
   return (
      <Wrapper>
         {sla.map((_, key) => <ProjectCard key={key} name="Pawee" description="Pet Adoption App" />)}
      </Wrapper>
   )
}

export default Projects