import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Carteira Nacional de Habilitação</Text>

        <Image
          source={require('./src/assets/eu.jpg')}
          style={styles.imagem}
        />
        <View style={styles.itemsWrapper}>
          <Text style={styles.texto}><Text style={styles.textoTopico}>Nome:</Text> Malena da Silva</Text>
          <Text style={styles.texto}><Text style={styles.textoTopico}>Idade:</Text> 19 anos</Text>
          <Text style={styles.texto}><Text style={styles.textoTopico}>Status:</Text> Desabilitadah</Text>
          <Text style={styles.texto}><Text style={styles.textoTopico}>Data de emissão:</Text> Assim que o PT permitir</Text>
          <Text style={styles.texto}><Text style={styles.textoTopico}>Vencimento:</Text> Sempre, eu nunca perco</Text>
        </View>
        <Button onPress={() => console.log('clicou')} title='Enviar apoio emocional' />
        <Image source={{uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg'}}
        style={styles.bandeira}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    paddingTop: 50,
    paddingBottom: 30
  },
  imagem: {
    height: 400,
    width: '100%',
    borderColor: '#ededed',
    borderWidth: 10,
    borderRadius: 15,
  },
  titulo: {
    fontSize: 33,
    paddingTop: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '900' 
  },
  texto: {
    fontSize: 16,
    padding: 1
  },
  textoTopico: {
    fontWeight: 'bold',
  },
  itemsWrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start'
  },
  bandeira: {
    width: 60,
    height: 50,
  }
});
