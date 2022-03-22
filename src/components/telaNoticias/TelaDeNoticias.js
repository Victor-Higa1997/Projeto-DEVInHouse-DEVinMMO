import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Noticia } from "../noticia/Noticia"
import { Context } from "../routes/Router"
import { fetchAllNews } from "../services/card-services"
import { Article, ButtonMaisNoticias, ButtonThemeNot, ButtonVoltar, DivMenuNot, Input, Main, Nav, PResult, Ul } from "../styles/TelaDeNoticias.styles"
import { Theme } from "../tema/Theme"

export const TelaDeNoticias = () => {
    const navigate = useNavigate()
    const noticiaRef = useRef([])
    const [noticias, setNoticias] = useState([])
    const [termoBusca, setTermoBusca] = useState("")
    const [pagina, setPagina] = useState(1)
    const { temaDark, setTemaDark } = useContext(Context)
    const qtdMaximaPaginas = Math.ceil(noticiaRef.current.length / 5)

    useEffect(() => {

        (async () => {
            const listaNoticias = await fetchAllNews()
            noticiaRef.current = listaNoticias
            setNoticias(filtrarListaPorPagina(noticiaRef.current, pagina))
        })()

    }, [])

    const filtrarListaPorPagina = (lista, pagina) => {
        const QTD_ITENS = 5
        return lista.slice(0, pagina * QTD_ITENS)
    }

    useEffect(() => {
        setNoticias(filtrarListaPorTermoDeBusca(noticiaRef.current, termoBusca))
    }, [termoBusca])

    useEffect(() => {
        setNoticias(filtrarListaPorPagina(noticiaRef.current, pagina))
    }, [pagina])

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1))
    }

    return (
        <>
            <ThemeProvider theme={Theme}>
                <Nav dark={temaDark}>DEVinMMO</Nav>
                <Main dark={temaDark}>
                    <DivMenuNot>
                        <ButtonVoltar dark={temaDark} onClick={() => navigate('/')}>Voltar</ButtonVoltar>
                        <ButtonThemeNot dark={temaDark} onClick={() => temaDark === false ?
                            setTemaDark(true) : setTemaDark(false)}>{!temaDark ? 'Tema escuro' : 'Tema claro'}</ButtonThemeNot>
                    </DivMenuNot>

                    <Article>
                        <Input onChange={(event) => { setTermoBusca(event.target.value) }} />
                        <PResult>Todas as notícias ({noticias.length} ~ {noticiaRef.current.length})</PResult>
                        <Ul>
                            {
                                noticias.length === 0 ?
                                    'Nenhum jogo encontrado' :
                                    noticias.map((value) =>
                                        <Noticia noticia={value} />)
                            }
                        </Ul>
                        <ButtonMaisNoticias dark={temaDark} onClick={handleProxPagina}>...</ButtonMaisNoticias>
                    </Article>

                </Main>
            </ThemeProvider>
        </>
    )
}
const filtrarListaPorTermoDeBusca = (lista, termo) => {
    return lista.filter((noticiaRef) => {
        return new RegExp(termo, "ig").test(noticiaRef.title)
    })
}