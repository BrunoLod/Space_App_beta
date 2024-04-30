import styled from "styled-components"

const Rodape = styled.footer`
    display: flex;
    max-width: 100%;
    height: 80px;
    margin-top: 95px;
    justify-content: space-between;
    background-image: linear-gradient(to right, #C98CF1, #7B78E5);
`
const Icones = styled.ul`
    list-style: none; /* Remove os estilos padrão da lista */
    display: flex;
    justify-content: center; /* Alinha os itens ao centro horizontalmente */
    align-items: center; /* Alinha os itens ao centro verticalmente */
`
const ItemLista = styled.li`
    margin: 0 10px; /* Adiciona margem entre os itens */
`
const NomeDesenvolvedor = styled.div`
    margin-right: 2rem;
    align-self: center;
    color: #FFFFFF;
`

const Footer = () => {

    return (

        <Rodape>

            <Icones>

                <ItemLista>
                    <a href="https://www.instagram.com/bruno_giustii/" target="_blank">
                        <img src="public/imagens/sociais/instagram.svg" />
                    </a>
                </ItemLista>


                <ItemLista>
                    <a href="https://twitter.com/BrunoLoducca_" target="_blank">
                        <img src="public/imagens/sociais/twitter.svg" />
                    </a>
                </ItemLista>

            </Icones>

            <NomeDesenvolvedor>Desenvolvido por Bruno Loducca</NomeDesenvolvedor>

        </Rodape>)

}

export default Footer