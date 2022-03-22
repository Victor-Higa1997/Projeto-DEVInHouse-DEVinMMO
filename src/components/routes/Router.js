import { Route, Routes } from "react-router-dom"
import { TelaDetalheDoJogo } from "../telaDetalheJogo/TelaDetalheDoJogo"
import { TelaDeNoticias } from "../telaNoticias/TelaDeNoticias"
import { TelaPrincipal } from "../telaPrincipal/TelaPrincipal"
import { createContext, useState } from "react"

export const Context = createContext()

export const Router = () => {
    const [temaDark, setTemaDark] = useState(false)

    return (

        <>
            <Context.Provider value={{ temaDark, setTemaDark }}>
                <Routes>
                    <Route path='/' element={<TelaPrincipal />} />
                    <Route path='/detalhes/:id' element={<TelaDetalheDoJogo />} />
                    <Route path='/noticias' element={<TelaDeNoticias />} />
                    <Route path='*' element={<h1>Site não encontrado!</h1>} />
                </Routes>
            </Context.Provider>
        </>

    )
}