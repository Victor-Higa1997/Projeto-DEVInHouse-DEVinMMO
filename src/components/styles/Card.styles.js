import styled from "styled-components";

export const DivCard = styled.div`
    height: 198px;
    width: 177px;
    display: flex;
    justify-content: center;
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.3rem gray;
    margin: 0.6rem;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover{
        height: 202px;
        width: 182px;
        box-shadow: 0.4rem 0.4rem 0.6rem gray;
    }
    &:hover Img{
        height: 202px;
        width: 182px;
    }

`
export const Img = styled.img`
    height: 105px;
    width: 177px;
    border-radius: 0.2rem;
   
`
export const Section = styled.section`
    height: 16px;
    width: 175px;
   /*  border: 0.1rem solid black; */
    display: flex;
    flex-direction: row;
`
export const DivPlataforma = styled.div`
    margin-top: 2.5px;
    height: 12px;
    width: 260px;
    border: 0.01rem solid lightgray;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PPlataforma = styled.p`
    font-size: 7px;
    max-width: 50px;
    max-height: 9px;
`

export const Tittle = styled.p`
    font-weight: 900;
    font-size: 10px;
    max-width: 178px;
    max-height: 22px;
    white-space: pre-line;
`
export const Desc = styled.p`
    font-size: 8px;
    max-width: 178px;
    white-space: pre-line;
    padding: 3px;
    margin-top: 5px;
    max-height: 14ch;
    text-overflow: clip;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100px;
    height: 20px;
    font-size: 10px;
    cursor: pointer;
    margin-top: 3px;
`


