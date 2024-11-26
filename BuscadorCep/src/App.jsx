import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './App.css'
//API
import api from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});



  //Sempre que digita
  function handleInputChange(event) {
    const formateedvalue = formatCep(event.target.value);
    setInput(formateedvalue)
  }

  function formatCep(value) {
    // Remove qualquer caractere que não seja número
    let formattedValue = value.replace(/\D/g, '');

    // Adiciona o hífen após os primeiros 5 dígitos
    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5) + '-' + formattedValue.slice(5, 8);
    }

    return formattedValue;
  }

  function CepWithNoHifen(cep) {
    const formattedValue = cep.replace('-', '');
    return formattedValue;
  }

  async function handleSearch() {

    if (input.length === 9) {
      const inputFormatted = CepWithNoHifen(input)
      try {

        const response = await api.get(`${inputFormatted}/json`);
        if(response.data.erro){
          alert('CEP inválido!');
          return;
        }

        console.log(response);
        setCep(response.data);
        setInput("");


      } catch (error) {
        alert("OPS ... Erro kkk")
      }

    } else {
      alert('Por favor, digite um CEP válido (no formato ######-###')
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }



  return (
    <>
      <div className='container'>
        <h1 className='title'>
          Buscador CEP
        </h1>

        <div className='containerInput'>
          <input
            type="text"
            name=""
            placeholder='Digite seu cep...'
            id="cep"
            value={input}
            maxLength={9}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}


          />

          <button
            type="button" id='button'
            className='buttonSearch'
            onClick={handleSearch}
          >
            <FaSearch className='searchIcon' size={25} color='#FFF'></FaSearch>
          </button>
        </div>



        {Object.keys(cep).length > 0 && (
          <main className='main'>
            <h2>CEP: {cep.cep}</h2>
            <span>Logradouro: {cep.logradouro}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>Cidade: {cep.localidade} - {cep.uf}</span>
            <span>DDD: {cep.ddd}</span>
          </main>

        )}
      </div>
    </>
  )
}

export default App
