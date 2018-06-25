import { injectGlobal } from 'react-emotion';

injectGlobal`
  html, body, #root {
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 0;
    margin: 0; 
  }
  `;
