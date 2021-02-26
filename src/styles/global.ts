import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
   margin: 0;
   padding: 0;
   border: none;
   outline: none;
   box-sizing: border-box;
}
*:focus {
   outline: none;
}
body {
   background: var(--color-background);
   font-family: 'Noto Sans', sans-serif;
}

body, input, textarea, button {
   font: 400 1rem 'Noto Sans';
}

button {
   cursor: pointer;
}

a {
   color: inherit;
   text-decoration: none;
}
::-webkit-scrollbar {
   width: 0.4rem;
}
::-webkit-scrollbar-track {
   background: transparent;
   border-radius: 0.5rem;
}
::-webkit-scrollbar-thumb {
   background: var(--color-primary);
   border-radius: 0.5rem;
}
::-webkit-scrollbar-corner { background: transparent; }
:root{
   --color-background: #C8BFBF;

   --color-white: #FFFFFF;
   --color-primary: #5965E0;
   --color-primary-hover: #4953B8;
   --color-twitter: #2AA9E0;
   --color-secondary-green: #4CD62B;
   --color-secondary-red: #E83F5B;
   --color-gray-line: #DCDDE0;
   --color-text-base: #666666;
   --color-text-title: #2E384D;
   --color-text-highlight: #B3B9FF;
}

@media (min-width: 850px) {
   :root{
      font-size: 62.5%
   }
}

@media (max-width: 850px) {
   :root{
      font-size: 42.5%;
   }
}

`;