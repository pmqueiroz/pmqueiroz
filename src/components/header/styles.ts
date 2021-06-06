// Packages
import styled, { css } from 'styled-components'
import { Box } from 'rebass'

type LinkProps = {
   isActive: boolean;
}

export const Wrapper = styled(Box)`
   width: 100%;
   height: auto;
   display: flex;
   padding: 5rem;
   align-items: center;
   justify-content: space-between;

`;

export const Link = styled.a<LinkProps>`
   text-transform: uppercase;
   font: 600 1.8rem 'Noto Sans';

   ${(props) => props.isActive === true
      && css`
         color: var(--color-primary);
   `}
`;