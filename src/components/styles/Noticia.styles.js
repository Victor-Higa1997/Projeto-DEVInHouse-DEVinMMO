import styled from "styled-components";

export const DivNoticia = styled.div`
    width: auto;
    height: 200px;
    border: 0.1rem solid lightgray;
    border-width: 0 0 2px;
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
`

export const SectionDivNot = styled.section`
    width: 345px;
    height: 190px;
    /* border: 0.1rem solid black; */
    margin: 0.4rem;
` 
export const SectionDivNot2 = styled.section`
    width: 425px;
    height: 190px;
    /* border: 0.1rem solid black; */
    margin: 0.4rem;
` 
export const ImgNot = styled.img`
    width: 345px;
    height: 190px;
    /* border: 0.1rem solid blue; */
    border-radius: 0.2rem;
`
export const PTituloNot = styled.p`
    font-size: 15px;
    font-weight: 900;
    padding: 0.5rem;
    max-height: 65px;
    max-width: 420px;
    /* border: 0.1rem solid black; */
`
export const PDescNot = styled.p`
    font-size: 12px;
    font-weight: 900;
    padding: 0.5rem;
    max-height: 65px;
    max-width: 420px;
    /* border: 0.1rem solid black; */
`
export const ButtonNot = styled.a`
    text-decoration: none;
    color: black;
    max-height: 18px;
    max-width: 110px;
`
export const ButtonNot2 = styled.p`
    height: 30px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: lightgray;
    border-radius: 0.2rem;
    margin: 1rem;
    transition: all 0.1s ease-out;
    &:hover{
        height: 35px;
        width: 205px;
    }
`

