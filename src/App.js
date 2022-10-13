import './App.css';
import imagenRickMorty from "./img/rick-morty.png"
import { useState } from 'react';
import Characters from "./components/Characters"

function App() {
  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    //Llamando al api
    const api = await fetch("https://rickandmortyapi.com/api/character")
    //Convirtiendolo a Json
    const characterApi = await api.json()
    //Mostrandola en la consola
    //console.log(characterApi)
    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imagenRickMorty} alt="Rick-Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar</button>
          </>
        )}
        hola hola
      </header>
    </div>
  );

}

export default App;
