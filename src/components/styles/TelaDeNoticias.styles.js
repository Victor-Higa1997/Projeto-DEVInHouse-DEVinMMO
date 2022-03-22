import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    height: 3rem;
    font-size: 2.5rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
`
export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 92vh;
    width: 100vw;
    /* border: 0.1rem solid black; */
`
export const Article = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 69rem;
    /* border: 0.1rem solid black; */
`
export const Ul = styled.ul`
    width: 52.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    list-style: none;
    flex-wrap: wrap;
    /* border: 0.1rem solid black; */
    margin-right: 1.85rem;
`

export const Input = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 2rem;
    border-width: 0 0 1px;
    outline: 0;
    font-size: 1.2rem;
`
export const PResult = styled.p`
    font-size: 1rem;
    height: 30px;
    text-align: center;
  
`
export const ButtonMaisNoticias = styled.button`
    height: 40px;
    width: 50px;
    border: none;
    border-radius: 0.3rem;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    margin: 2rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    font-weight: 900;
    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover{
        margin: 3rem;
        box-shadow: 0.4rem 0.4rem 0.6rem gray;
    }
`
export const ButtonVoltar = styled.button`
    border: none;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    width: 130px;
    height: 30px;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s ease-out;
    margin-right: 0.5rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    &:hover{
        background-color: gray;
        color: white;
        font-size: 17px;
    }
`
export const DivMenuNot = styled.div`
    margin-top: 0.5rem;
    height: 3rem;
    width: 55rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ButtonThemeNot = styled.button`
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    border: none;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    width: 130px;
    height: 30px;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s ease-out;
    &:hover{
        background-color: gray;
        color: white;
        font-size: 17px;
    }
`