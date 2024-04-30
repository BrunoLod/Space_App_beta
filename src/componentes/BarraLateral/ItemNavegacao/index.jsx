import { styled } from "styled-components"

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$ativo ? 'GandhiSansBold':'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;

     /* Adicionando efeito de hover */
     &:hover {
        color: #7B78E5;
    }
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (

        /*
        
        Se eu quero enviar uma propriedade de um componente React ao 
        componente styled, utilizo a props, que aqui é demarcada pelo 
        uso do $ativo={ativo}. 

        Lembrando que dentro de "src", em <img>, estou utilizando uma 
        operação ternária que estabelece uma condição, como forma de produzir
        resultados diferentes, relativos ao icone estar ativou ou inativo. 

        Children, por sua vez, é o texto que estou passando para cada 
        item da navegação. 
        
        */

        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao