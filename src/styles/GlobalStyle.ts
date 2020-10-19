import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body,
   input,
   button,
   textarea {
      font: 500 1.6rem Poppins;
      color: var(--color-text-base);
      border: none;
      background: none;
   }

   body {
      background: var(--color-background);
      color: var(--color-text-base);
   }

   :root{
      --color-primary: #06d6a0;
      --color-text-base: #121212;
      --color-background: #ebebeb;
   }

   @media (min-width: 850px) {
      :root{
         font-size: 62.5%
      }
   }
`;
