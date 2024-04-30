import { styled } from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
    position: relative;

    /*
    
    inline-block transforma o item, elemento, 
    ou conteúdo, num bloco de linha, de modo que
    consiga alterar o seu tamanho.  
    
    */

    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #7B78E5; // Não aceita gradiente. 
    background: transparent;
    box-sizing: border-box; // Modo que inclui, considera o padding ou margin do elemento. 
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto

