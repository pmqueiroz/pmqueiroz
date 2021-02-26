import styled from 'styled-components';

export const Container = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.5rem;

   color: var(--color-text-in-primary);
   background: var(--color-primary);
   border-radius: 50%;
   transition: transform 0.2s;

   &:hover {
         transform: scale(1.2);
   }
`;