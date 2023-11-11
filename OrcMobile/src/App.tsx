import { Text, SafeAreaView, View } from "react-native"
import styled from "styled-components/native"

const TextNew = styled.Text`
    font-size: 30px;
    color: pink;
    text-decoration: underline;
`;

const App = () => {
    return(
        <SafeAreaView>
            <Text>Testando</Text>
            <TextNew>
                NOVO TESTE
            </TextNew>
        </SafeAreaView>
    )
}

export default App