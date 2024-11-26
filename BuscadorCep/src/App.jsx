import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <h1 className='title'>
            Buscador CEP
        </h1>

        <div className='containerInput'>
          <input type="text" name="" placeholder='Digite seu cep' id="" />

          <button type="button" className='buttonSearch'>
          <FaSearch className='searchIcon' size={25} color='#FFF'></FaSearch>
        </button>
        </div>

        <div style={{border: "2px solid black", padding: "20px;"}}>
  Este texto está dentro de uma caixa com padding.
</div>

        

        <main className='main'> 
            <h2>CEP: 2382832323</h2>
            <span> Rua Teste da Silva</span>
            <span>Complemento: Casa</span>
            <span>Bairro Vila Rosa</span>
            <span>Ouro Branco - MG</span>
        </main>
      </div>
    </>
  )
}

export default App
