import styled from "styled-components";
import deslike from '../../imagens/deslike.png'
import like from '../../imagens/like.png'

export const SectionComentario = styled.section`
    height: 105px;
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid lightgray;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
`
export const SectionComentarioDiv = styled.section`
    height: 100%;
    width: 100%;
    /* border: 0.1rem solid red; */
`
export const SectionComentarioDiv2 = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    flex-direction: row;
    /* border: 0.1rem solid red; */
    align-items: center;
`

export const PComentTitulo = styled.p`
    max-width: 600px;
    max-height: 25px;
    font-weight: 900;
    /* border: 0.1rem solid black; */
`

export const PComent = styled.p`
    max-width: 600px;
    max-height: 60px;
    /* border: 0.1rem solid black; */
`
export const ButtonComentLike = styled.button`
    width: 27px;
    height: 23px;
    background-image: url(${like});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: inherit;
    margin: 0.2rem;
`
export const ButtonComentDeslike = styled.button`
    width: 25px;
    height: 25px;
    background-image: url(${deslike});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: inherit;
    margin: 0.2rem;
`
export const PQtdReacoes = styled.p`
    max-width: 60px;
    max-height: 50px;
    /* border: 0.1rem solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
`