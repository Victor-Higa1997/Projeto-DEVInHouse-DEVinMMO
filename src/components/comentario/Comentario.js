import { useReducer } from "react"
import { ButtonComentDeslike, ButtonComentLike, PComent, PComentTitulo, PQtdReacoes, SectionComentario, SectionComentarioDiv, SectionComentarioDiv2 } from "../styles/Comentario.styles"

export const Comentario = ({ valor, teste, context, id }) => {

    const initialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <SectionComentario>
                <SectionComentarioDiv>
                    <PComentTitulo>{valor.nome}:</PComentTitulo>
                    <PComent>{valor.comentario}</PComent>
                </SectionComentarioDiv>

                <SectionComentarioDiv2>
                    <ButtonComentDeslike onClick={() => dispatch({ type: 'decrement' })} />
                    <PQtdReacoes>{state.count}</PQtdReacoes>
                    <ButtonComentLike onClick={() => dispatch({ type: 'increment' })} />
                </SectionComentarioDiv2>
            </SectionComentario>

        </>
    )
}