import styled from "styled-components";


export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    height: 3rem;
    font-size: 2.5rem;
    
`
export const MainDJ = styled.main`
    width: 100vw;
    height: auto;
    /* border: 0.1rem solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonVoltar = styled.button`
    width: 250px;
    height: 40px;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    border: none;
    font-size: 14px;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    margin: 3px;
    &:hover{
        background-color: gray;
        color: white;
        font-size: 16px;
    }
`

export const ArticleDJ = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 57rem;
    /* border: 0.1rem solid black; */
`

export const SectionImgDJ = styled.section`
    display: flex;
    justify-content: center;
    height: 25.5rem;
    width: 55rem;
    /* border: 0.1rem solid red; */
`
export const ImgDJ = styled.img`
    height: 25rem;
    width: 55rem;
    border-radius: 0.2rem;
    /* border: 0.1rem solid gray; */
`

export const SectionPDJ = styled.section`
    height: 3rem;
    width: 55rem;
    /* border: 0.1rem solid black; */
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
`
export const PDJ = styled.p`
    font-size: 26px;
    color: black;
    max-height: 3rem;
    max-width: 50rem;
    margin: 0.3rem;
`
export const SectionImgs = styled.section`
    height: 7rem;
    width: 55rem;
    /* border: 0.1rem solid black; */
`
export const ImgsDJ = styled.img`
    height: 6rem;
    width: 10rem;
    margin: 0.2rem;
    cursor: pointer;
    border-radius: 0.2rem;
    transition: all 0.3s ease-out;
    &:hover{
        height: 6.3rem;
        width: 10.3rem;
        border: 0.2rem solid lightgray;
    }
`

export const SectionDivDJ = styled.section`
    height: 3.5rem;
    width: 55rem;
    /* border: 0.1rem solid blue; */
    display: flex;
    flex-direction: row;
`
export const SectionTDescDJ = styled.section`
    height: 3.5rem;
    width: 10rem;
    /* border: 0.1rem solid black; */
    display: flex;
    flex-direction: column;
`

export const PTituloDJ = styled.p`
    font-size: 18px;
    font-weight: 900;
    margin-left: 0.4rem;
    max-height: 1.4rem;
`
export const PDescDJ = styled.p`
    font-size: 18px;
    margin-left: 0.4rem;
    height: auto;
    max-width: 860px;
    white-space: pre-line;
`
export const PTituloDetDJ = styled.p`
    font-size: 15px;
    font-weight: 900;
    margin-left: 0.4rem;
    max-height: 1rem;
    max-width: 12rem;
`
export const PDescDetDJ = styled.p`
    font-size: 15px;
    margin-left: 0.4rem;
    height: auto;
    max-width: 560px;
    white-space: pre-line;
`
export const SectionDetDJ = styled.section`
    height: auto;
    width: 55rem;
    /* border: 0.1rem solid black; */
`
export const SectionReqDJ = styled.section`
    height: 9rem;
    width: 55rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    margin-top: 0.5rem;
    border-radius: 0.2rem;
    /* border: 0.1rem solid black; */
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    padding: 0.3rem;
`
export const SectionReqDivDJ = styled.section`
    height: auto;
    width: 55rem;
   /*  border: 0.1rem solid black; */
    display: flex;
    flex-direction: row;
`

export const SectionUsuario = styled.section`
    width: 55rem;
    height: auto;
    margin-top: 2rem;
    /* border: 0.1rem solid black; */
`

export const SectionComent = styled.section`
    width: 35rem;
    height: auto;
    /* border: 0.1rem solid black; */
`
export const SectionComentError = styled.section`
    width: 34rem;
    height: auto;
    color: red;
    display: flex;
    justify-content: space-around;
    /* border: 0.1rem solid black; */
    margin-left: 1rem;
`
export const SectionComentError2 = styled.section`
    width: 34rem;
    height: auto;
    color: red;
    margin-left: 1rem;
`
export const ButtonForm = styled.button`
    border: none;
    height: 2rem;
    width: 6rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
`
export const ButtonThemeDet = styled.button`
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    border: none;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    width: 250px;
    height: 40px;
    border-radius: 0.2rem;
    cursor: pointer;
    margin: 3px;
    font-size: 14px;
    transition: all 0.2s ease-out;
    &:hover{
        background-color: gray;
        color: white;
        font-size: 16px;
    }
    `