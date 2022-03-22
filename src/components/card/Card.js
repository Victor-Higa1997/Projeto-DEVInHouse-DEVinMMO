import { Link } from "react-router-dom"
import { Desc, DivCard, DivPlataforma, Img, PPlataforma, Section, Tittle } from "../styles/Card.styles"

export const Card = ({ card }) => {

    return (
        <>
            <DivCard>
                <Img src={card.thumbnail} />

                <Section>

                    <Tittle>{card.title}</Tittle>
                    <DivPlataforma>
                        <PPlataforma>{card.platform}</PPlataforma>
                    </DivPlataforma>

                </Section>

                <Desc>{card.short_description}</Desc>

                <Link style={{
                    maxHeight: '24px', maxWidth: '100px',
                    fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'lightgray', textDecoration: 'none', borderRadius: '0.1rem', color: 'black'
                }}
                    to={"/detalhes/" + card.id} props={card.id}>VER MAIS</Link>

            </DivCard>
        </>
    )
}