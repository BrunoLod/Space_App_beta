import { styled } from 'styled-components'
import Titulo from "../../TItulo"

import fotos from './fotos-populares.json'

const SecaoPopulares = styled.section`
    margin-left: 24px;
`

const ColunaFotos = styled.section`
    display: flex;             // exibição
    flex-direction: column;    // diração e tipo da exibição
    gap: 16px;                 // distância dos itens entre si desse container 

`

const ImagemPopulares = styled.img`
    max-width: 212px;
    border-radius: 20px;
    transition: transform .2s;
    cursor: pointer;

    &:hover{transform: translate(0, -0.3rem);}
`
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;

    &:hover {background-image: linear-gradient(to right, #C98CF1, #7B78E5); 
    border: none}
`;

const Populares = () => {
    return (

        /* 
        
        Não havia passado no componente Titulo, na parte
        styled que seu alinhamento obedeceria uma props - 
        propertys (propriedades) ? Então, para efetivamente 
        passá-la basta eu fazer como abaixo, de modo que chamo
        a propriedade via o "$" e seu respectivo nome, atribuindo-a
        à "center", indicando ao text-aling que desejo que o texto
        nele se alinhe ao centro. 
        
        */

        <SecaoPopulares>
            <Titulo $alinhamento="center">
                Populares
            </Titulo>
            <ColunaFotos>
                {fotos.map( foto => <ImagemPopulares key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColunaFotos>
            <Botao>
                Ver mais
            </Botao>
        </SecaoPopulares>
    )
}

export default Populares