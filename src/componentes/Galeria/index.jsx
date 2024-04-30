import styled from "styled-components"
import Titulo from "../TItulo"
import Imagem from "./Imagem"
import Populares from "./Populares"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoImagens = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], quandoFotoSelecionada, quandoFavoritoAlternar}) => {
    return (

        // Entender o motivo de usar essa estrutura.

        <>
            <Tags />
            <GaleriaContainer>
                <SecaoImagens>
                    <Titulo>
                        Navegue pela geleria
                    </Titulo>

                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            quandoZoomSolicitado={quandoFotoSelecionada}
                            quandoFavoritoAlternar={quandoFavoritoAlternar}
                            key={foto.id}
                            foto={foto} />)}
                    </ImagensContainer>

                </SecaoImagens>
                <Populares />
            </GaleriaContainer>
        </>

    )
}

export default Galeria