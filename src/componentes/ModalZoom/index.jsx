import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
`

const BotaoFechar = styled.button`
    position: absolute;
    top: 20px;
    right: 60px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ModalZoom = ({ foto, quandoFechar, quandoFavoritoAlternar}) => {

    /* Criando uma função para impedir que 
       o método onClick execute o seu proceder 
       normal, que é de resetar a página toda
       vez que clicado.  */

    const handleFechar = (event) => {

        /* Evita o comportamento padrão do evento onClick */
        event.preventDefault(); 

        /* Chama a função para fechar o modal */
        quandoFechar();  
    };

    return (
        <>

            {/* Criando uma condicional de se foto é true, então renderiza
                o componente a seguir. */}

            {foto && (
                <Overlay>
                    <DialogEstilizado>
                        <Imagem 
                            foto={foto} 
                            expandida={true} 
                            quandoFavoritoAlternar={quandoFavoritoAlternar}/>
                        <form>
                            <BotaoFechar onClick={handleFechar}>
                                <img src="/icones/fechar.png" alt="Icone de fechar" />
                            </BotaoFechar>
                        </form>
                    </DialogEstilizado>
                </Overlay>
            )}
        </>
    )
}

export default ModalZoom
