import styled, {css} from 'styled-components';

type ButtonProps = {
   isPrimary: boolean
}

export const Container = styled.a<ButtonProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.5rem;

   color: var(--color-primary);
   background: var(--color-text-in-primary);
   border-radius: 50%;
   transition: transform 0.2s;

   &:hover {
         transform: scale(1.2);
   }

   ${(props) => props.isPrimary === true && 
      css`
         background: var(--color-primary);
         color: var(--color-text-in-primary);
      `
   }
`;