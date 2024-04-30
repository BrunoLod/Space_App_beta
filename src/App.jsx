import { styled } from "styled-components"
import Banner from "./componentes/Banner"
import BarraLateral from "./componentes/BarraLateral"
import Cabecalho from "./componentes/Cabecalho"
import EstilosGlobais from "./componentes/EstilosGlobais"

import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"

import foto from './fotos.json'

import { useState } from "react"
import Footer from "./componentes/Footer"
import ModalZoom from "./componentes/ModalZoom"


const Fundo = styled.div`
  background: #010D00;
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width : 1440px;   // Definindo o tamanho da ladingpage, porém se a tela na qual ela
  margin: 0 auto;   // estiver for menor que 1440px, por meio do max-width garanto que 
  max-width: 100%;  // ela não ultrapasse o tamanho da tela, na medida em que indico que 
`                   // precisa ter no máximo 100% de tamanho.  

/* 

Componente styled que estarei utilizando para criar justamente 
um container que abrace tanto a barra lateral - sidebar - quanto 
o banner, de modo que consiga colocá-los na mesma linha, respeitando
uma distância entre eles. Para isso, utilizarei o display flex. 

No curso o instrutor Vinny Neves coloca "styled.main". Eu preferi 
deixar como div, pois não concordo, a rigor, que é o conteúdo princial 
da página, sendo esse a lista das fotos. 

*/
const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;

  /* 
  
  Estou criando um item flexível, que a partir do trecho a baixo, 
  informa que esse deve crescer, como forma de preencher e ocupar todo o 
  espaço disponível no container.  
     
  */

  flex-grow: 1;
`

function App() {

  /*
  
  Preciso criar uma galeria que recebe os parâmetros
  das fotos presentes num arquivo JSON, de modo que 
  inicialmente carregue todas as imagens, mas que essas
  possam ser alteradas, mediante ao clicar nas tags, bem
  como no campo de busca do usuário. 

  Tendo em vista que eu preciso de uma série de itens
  e que esses alteram o seu resultado conforme as entradas
  do usuário, posso utilizar um useState - um hook que 
  apresenta o um estado padrão, mas que oferece a possibilidade
  de seu estado ser alterado, mediante a uma nova informação, 
  por assim dizer. 

  */

  // useState: 
  const [fotosDaGaleria, setfotosDaGaleria] = useState(foto)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const quandoFavoritoAlternar = (foto) => {

    setfotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {

      if (foto.id === fotoSelecionada?.id){
        setFotoSelecionada({
          ...fotoSelecionada, 
          favorita: !fotoSelecionada.favorita
        })
      }

      return {
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      
      }})) 
  }

  return (
    <Fundo>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>

            <Banner
              texto="A galeria mais completa das fotos do espaço"
              backgroundImage={bannerBackground} />

            {/* Criando uma "props" que recebe como valor o estado fotosDaGaleria */}
            <Galeria
              quandoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosDaGaleria}
              quandoFavoritoAlternar={quandoFavoritoAlternar} />

          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer/>
      <ModalZoom
        foto={fotoSelecionada}

        /* Criando uma arrow function, que "seta" um novo estado 
        ao estado  das fotos selecionadas. Note que aqui estou 
        atribuindo ao estado, nessa função ou, se preferir, método 
        um valor nulo, pois, desse modo, o valor no componente 
        ModalZoom deixa de ser true, voltando a imagem em sua forma
        normal, e não expandida. */

        quandoFechar={() => setFotoSelecionada(null)}

        quandoFavoritoAlternar={quandoFavoritoAlternar}
      />
    </Fundo>
  )
}

export default App