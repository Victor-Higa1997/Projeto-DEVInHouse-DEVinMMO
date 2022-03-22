import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Card } from "../card/Card"
import { Context } from "../routes/Router"
import { fetchAllCards } from "../services/card-services"
import { Arrow, Article, ButtonNoticias, ButtonTheme, DivMenu, Footer, Input, Main, Nav, P, Paginacao, Ul } from "../styles/TelaPrincipal.styles"
import { Theme } from "../tema/Theme"

export const TelaPrincipal = () => {
    const navigate = useNavigate()
    const cards = useRef([])
    const [lista, setLista] = useState([])
    const [pagina, setPagina] = useState(1)
    const [termoBusca, setTermoBusca] = useState("")
    const { temaDark, setTemaDark } = useContext(Context)
    const qtdMaximaPaginas = Math.ceil(cards.current.length / 8)

    useEffect(() => {
        (async () => {
            const listaTodos = await fetchAllCards()
            cards.current = listaTodos
            setLista(filtrarListaPorPagina(cards.current, pagina))
        })()
    }, [])

    useEffect(() => {
        setLista(filtrarListaPorTermoDeBusca(cards.current, termoBusca));
    }, [termoBusca]);

    useEffect(() => {
        setLista(filtrarListaPorPagina(cards.current, pagina))
    }, [pagina])

    const handlePagAnterior = () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1))
    }

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1))
        console.log(pagina)
    }

    return (
        <>
            <ThemeProvider theme={Theme}>
                <Nav dark={temaDark}> DEVinMMO</Nav>
                <Main>
                    <DivMenu>
                        <ButtonNoticias dark={temaDark} onClick={() => navigate('/noticias')}>Notícias</ButtonNoticias>
                        <ButtonTheme dark={temaDark} onClick={() => temaDark === false ?
                            setTemaDark(true) : setTemaDark(false)}>{!temaDark ? 'Tema escuro' : 'Tema claro'}</ButtonTheme>

                    </DivMenu>
                    <Article>
                        <Arrow dark={temaDark} type='button' value='<' onClick={handlePagAnterior}></Arrow>
                        <Paginacao>
                            <Input onChange={(event) => {
                                setTermoBusca(event.target.value)
                            }} />
                            {console.log(pagina)}
                            {console.log(lista.length)}
                            <P>Todos os resultados ( {`${lista.length !== 3 ? lista.length * pagina : 371} ~ ${cards.current.length}`} ) </P>
                            <Ul>
                                {lista.length === 0
                                    ? "Nenhum jogo encontrado"
                                    : lista.map((cards) =>

                                        <Card card={cards} />
                                    )
                                }
                            </Ul>
                        </Paginacao>
                        <Arrow dark={temaDark} type='button' value='>' onClick={handleProxPagina}></Arrow>
                    </Article>
                </Main>
            </ThemeProvider>
        </>
    )
}

const filtrarListaPorTermoDeBusca = (lista, termo) => {
    return lista.filter((cards) => {
        return new RegExp(termo, "ig").test(cards.title)
    })
}
const filtrarListaPorPagina = (lista, pagina) => {
    const QTD_ITENS = 8
    return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS)
}