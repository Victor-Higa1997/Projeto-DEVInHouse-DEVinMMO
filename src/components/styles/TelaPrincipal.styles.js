import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    width: 100vw;
    /* border: 0.1rem solid black; */
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: lightgray; */
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    height: 3.5rem;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };

`
export const Article = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 38rem;
    width: 69rem;
    /* border: 0.1rem solid black; */
`
export const Ul = styled.ul`
    width: 52.5rem;
    height: 27.5rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    /* border: 0.1rem solid black; */
    margin-right: 1.85rem;
  
`

export const Input = styled.input`
    width: 500px;
    height: 40px;
    border-width: 0 0 1px;
    outline: 0;
    font-size: 1.2rem;
`
export const P = styled.p`
    font-size: 1rem;
    height: 30px;
    text-align: center;
`
export const Logo = styled.header`
    

`
export const Paginacao = styled.div`
    width: 910px;
    height: 530px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 0.1rem solid red; */
`

export const Arrow = styled.input`
    width: 62px;
    height: 60px;
    font-size: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding-bottom: 65px;
    border-radius: 0.2rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    cursor: pointer;
    transition: all 0.2s ease-out;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    &:hover{
        font-size: 59px;
        box-shadow: 0.4rem 0.4rem 0.6rem gray;
    }
`
export const ButtonNoticias = styled.button`
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    border: none;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    width: 130px;
    height: 30px;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s ease-out;
    margin-right: 0.5rem;
    &:hover{
        background-color: gray;
        color: white;
        font-size: 17px;
    }
`
export const ButtonTheme = styled.button`
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


export const DivMenu = styled.div`
    margin-top: 0.5rem;
    height: 3rem;
    width: 55rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`