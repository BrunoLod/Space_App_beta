import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Secao = styled.div`
    display: flex;
`

const Figure = styled.figure`
    width: ${props => props.$expandida ? '75%' : '460px'};
    max-width: 100%;
    margin: 0;
    margin-left: ${props => props.$expandida ? "11rem" : "0"};
    display: flex;
    flex-direction: column;
    
    /* Segmentei os elementos, visualmente, que compõe a imagem criada. */

   /*---------------------------------------------------------------------------*/

    /* Seleciono todas as img que são filhas de figure e "seto" os parâmetros que lhes serão pertinentes. */
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        
    }

    /* Selecionando a porção "da base" daquilo que será a imagem. */
    figcaption {
        background-image: linear-gradient(to right, #C98CF1, #7B78E5);
        border-radius: 0px 0px 20px 20px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    /*--------------------------------------------------------------------------*/
    }
`
const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, quandoZoomSolicitado, quandoFavoritoAlternar}) => {
    
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
    
    return (

        <Secao>
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>

            <img src={foto.path} alt={foto.alt} />
            
            <figcaption>
                <h3>{foto.titulo}</h3>

                <Rodape>
                    <h4>{foto.fonte}</h4>

                    <BotaoIcone onClick={() => quandoFavoritoAlternar(foto)}>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </BotaoIcone>

                    {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => quandoZoomSolicitado(foto)}>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </BotaoIcone>}
                </Rodape>

            </figcaption>

        </Figure>
        </Secao>)
}

export default Imagem