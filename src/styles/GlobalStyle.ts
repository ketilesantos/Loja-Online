import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary-color: #E530FA;
  --secondary-color: #dfe4ef;
  --base-color: #FFFFFF;
  --dark-color: #000000;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: --base-color;
  }

  body, input, textarea, button, ul, li, div {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
  }

  button{
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8)
    }
  }

  html{
    @media(max-width: 1080px){
     font-size: 93.75%; // 15px percent * 16
    }

    @media(max-width: 720px){
      font-size: 87.5%; // 14px percent * 16
    }
  }
`;
