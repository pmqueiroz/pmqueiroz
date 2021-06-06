import styled, {css} from 'styled-components';

type ButtonProps = {
   isPrimary: boolean
}

export const Container = styled.a<ButtonProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 4rem;
   height: 4rem;

   color: var(--color-primary);
   background: var(--color-text-in-primary);
   border-radius: 50%;
   transition: transform 0.2s;
   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

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