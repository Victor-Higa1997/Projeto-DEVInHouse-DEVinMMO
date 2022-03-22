import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        width: 100vw;
        height: 100vh;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 55rem;
        height: auto;
        justify-content: center;
        /* border: 0.1rem solid black; */
        border-radius: 0.2rem;
    }
    input{
        font-family: 'Montserrat', sans-serif;
        width: 16rem;
        height: 2rem;
        margin: 0.5rem;
        border-radius: 0.3rem;
        font-size: 14px;
    }
    #comentario{
        font-family: 'Montserrat', sans-serif;
        width: 33rem;
        height: 8rem;
        margin: 0.5rem;
        border-radius: 0.3rem;
        font-size: 14px;
    }
    button{
        font-family: 'Montserrat', sans-serif;
        border-radius: 0.2rem;
        transition: all 0.1s ease-out;
        &:hover{
            color: gray;
            background-color: gray;
            color: white;
        }
    }
    p{
        font-family: 'Montserrat', sans-serif;
    }
    nav{
        font-family: 'Montserrat', sans-serif;
    }
` 
