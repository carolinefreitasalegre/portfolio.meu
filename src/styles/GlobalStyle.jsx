import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Sono:wght@100,@800,@500&display=swap");
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        box-sizing: border-box;
        text-decoration: none;      
        background-color: #F6F6EA;
        list-style: sono;
        overflow-x: hidden;

    }
    body{
        min-height: 99vh;
        width: 100vw;
        color: #E6324B;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    

::-webkit-scrollbar-track {
  background-color: var(--color02);
}

::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}

::-webkit-scrollbar-thumb {
  background: var(--color03);
  border-radius: 15px;
}

    
`;
export default GlobalStyle;
