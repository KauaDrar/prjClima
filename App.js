import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
    const [dados, setDados] = useState("");

    async function carregaDados(){
      const response = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=a3460caf&city_name=mongagua,SP')
      setDados(response.data.forecast[0]);
    }
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.titulo}> Previsão do Tempo </Text>
      </View>
      <View>
          <Text style={styles.label}> Cidade: </Text>
          <TextInput placeholder= 'Digite sua Cidade'
          style={styles.input}
          />
          </View>
        <View style={styles.bloco}>
          <TouchableOpacity style={styles.botao} onPress={carregaDados}>
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>
    
    <View style={styles.bloco}>
        <Tempo clima={dados}/>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#edf6f9",
  },

  container: {
    flex: 1,
    marginTop: '30%',
  },

  titulo: {
    fontSize: 30,
    marginTop: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#006d77'
  },

  label: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#006d77'
  },

  bloco: {
    marginTop: 30,
    alignItems: 'center',
    display: 'flex',
  },

  input: {
    borderBottomWidth: 2,
    width: '80%',
    marginLeft: '8%',
    marginTop: 20,
    fontSize: 20,
  },

  botao: {
    width: '80%',
    backgroundColor: '#006d77',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 35,
    borderRadius: 5,
  },

  textoBotao: {
    fontSize: 20,
    color: '#83c5be'
  }
});
