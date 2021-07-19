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

   color: ${props => props.theme.colors.white};
   background: ${props => props.theme.colors.darkBlue};
   border-radius: 50%;
   transition: transform 0.2s;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

   &:hover {
         transform: scale(1.2);
   }

   ${(props) => props.isPrimary === true && 
      css`
         background: ${props => props.theme.colors.purple};
         color: ${props => props.theme.colors.white};
      `
   }
`;