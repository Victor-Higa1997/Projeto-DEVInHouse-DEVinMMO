import { ButtonNot, ButtonNot2, DivNoticia, ImgNot, PDescNot, PTituloNot, SectionDivNot, SectionDivNot2 } from "../styles/Noticia.styles"

export const Noticia = ({ noticia }) => {

    return (

        <>
            <DivNoticia>
                <SectionDivNot>
                    <ImgNot src={noticia.main_image} />
                </SectionDivNot>
                <SectionDivNot2>
                    <PTituloNot>{noticia.title}</PTituloNot>
                    <PDescNot>{noticia.short_description}</PDescNot>
                    <ButtonNot2><ButtonNot href={noticia.article_url} target="_blank">VER NO SITE</ButtonNot></ButtonNot2>
                </SectionDivNot2>
            </DivNoticia>

        </>

    )
}