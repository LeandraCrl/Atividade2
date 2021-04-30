import React, { useState } from 'react';
import axios from 'axios';


export default function App() {

const [cep, setCep] = useState({ cep: '' });

const [informacoes, setInformacoes] = useState({

    cep: '0663-290',
    logradouro: 'Estrada Austral',
    complemento: '',
    bairro: 'Jardim Vitapolis',
    localidade: 'Itapevi',
    uf: 'SP',
    ibge: '3522505',
    gia: '2669',
    ddd: '11',
    siafi: '6551'

});
const getInformacoes = () => {
    axios.get('http://viacep.com.br/ws/06693290/json/')
    then(response => {
    setInformacoes(response.data);

  });

{
  return (
    <View>
      { informacoes ['cep'] }
      { informacoes['logradouro'] }
      { informacoes['complemento'] }
      { informacoes['bairro'] }
      { informacoes['localidade'] }
      { informacoes['uf'] }
      { informacoes['ibge'] }
      { informacoes['gia']}
      { informacoes['ddd']}
      { informacoes['siafi']}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fft',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
