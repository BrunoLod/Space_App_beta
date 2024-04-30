import { styled } from "styled-components"

const FiguraBanner = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;  // Faz com que o componente ocupe todo o espaço disponível, caso haja espaço extra. 
    background-repeat: no-repeat;
    display: flex; // Usado para facilitar a disposição interna a esse componente de outros itens. 
    align-items: center; 
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover; // Redimensiona a imagem, para que ela fique no menor tamanho possível, 
                            // para preencher o container, sem que permita um espaço vazio. 
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px; // altura da linha - determina o espaço vertical entre o texto e as linhas. 
    color: #FFFFFF;
    max-width: 300px;
    margin-bottom: 10px;
    padding: 0 64px;
`
/* 

OBS: Toda vez que eu tiver um cifrão, como esse, estou dizendo que quero 
passar tal item ao styled component, para que nele possa ser estilizado. 
*/

const Banner = ({ texto, backgroundImage }) => {
    return (
    <FiguraBanner $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FiguraBanner>)

}

export default Banner