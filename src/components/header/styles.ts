import styled, { css } from 'styled-components';

type LinkProps = {
   isActive: boolean;
}

export const Container = styled.div`
   width: 100%;
   height: 5rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 3rem;

   nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
   }

   button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      border-radius: 50%;
      transition: transform 0.2s;
      background: var(--color-primary);
      color: var(--color-text-in-primary);

      &:hover {
            transform: scale(1.2);
      }

   }
`;

export const Link = styled.a<LinkProps>`
   text-transform: uppercase;
   font: 600 1.8rem 'Noto Sans';

   ${(props) => props.isActive === true
      && css`
         color: var(--color-primary);
   `}
`;