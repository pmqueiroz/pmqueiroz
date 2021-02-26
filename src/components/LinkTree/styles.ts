import styled from 'styled-components';

export const Container = styled.div`
   position: absolute;
   bottom: 3rem;
   left: 3rem;

   display: grid;
   grid-template-rows: repeat(3, 1fr);
   gap: 1rem;
`;