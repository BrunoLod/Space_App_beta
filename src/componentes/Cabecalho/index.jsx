import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"


/* 

Criando um componente estilizado. 

O display, como seu nome diz, controla 
a exibição dos itens demonstrados na página, 
de modo que possibilita a inserção de outros
parâmetros que podem influenciar na organização
desses. 

*/
const HeaderEstilizado = styled.header`
    padding: 60px 25px;
    display: flex;
    justify-content: space-between;
    img {
    max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt=""/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho