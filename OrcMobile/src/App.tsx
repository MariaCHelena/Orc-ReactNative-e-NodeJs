import { Text, SafeAreaView, View, Image, Pressable } from "react-native"
import styled from "styled-components/native"
import fotoCarteira from './assets/fotoCarteira.jpg'
import bandeira from './assets/bandeira.jpg'

const Titulo = styled.Text`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 900;
    color: black;
    text-align: center;
    font-family: serif;
`;
 
const FotoHabilitacao = styled.Image`
    height: 300px;
    width: 80%;
    border: 5px solid white;
`

const Topico = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
`

const Main = styled.SafeAreaView`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 50px 15px;
    background-color: lightblue;
`

const FotoBandeira = styled.Image`
    height: 8%;
    width: 80px;
`

const Botao = styled.Pressable`
    background-color: green;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 28px;
    border: 3px solid darkgreen;
    box-shadow: 1px 1px 1px;
`

const TextoBotao = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`

const App = () => {
    return(
        <Main>
            <Titulo>Carteira Nacional de Habilitação</Titulo>
            <FotoHabilitacao 
                source={fotoCarteira}
            />
            <View>
                <Topico>Nome: Maria Helena :3</Topico>
                <Topico>Profissão: Pobre</Topico>
                <Topico>Tipo da CNH: Inexistente</Topico>
                <Topico>Data de emissão: 30/02/2022</Topico>
                <Topico>Data de vencimento: Todos os dias, eu nunca perco</Topico>
            </View>
            <Botao>
                <TextoBotao>Mandar apoio moral</TextoBotao>
            </Botao>
            <FotoBandeira 
                source={bandeira}
            />
        </Main>
    )
}

export default App