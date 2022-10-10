import React from 'react'

const Characters = (props) => {
  const { characters, setCharacters } = props

  const resetCharacters = () =>{
    setCharacters(null)
  }
  return (
    <div className='characters'>
      <h1>Personajes</h1>
      <button className="btn-search" onClick={resetCharacters}>Volver a la Home</button>
      <div className='container-characters'>
        {characters.map((character, index) => (
          <div className='character-container' key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className='alive' />
                    Alive
                  </>
                ) : (
                  <>
                    <span className='dead' />
                    Dead
                  </>
                )}
              </h6>
              <p className='text-grey'>
                <span> Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className='text-grey'>Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={resetCharacters} className="btn-search">Volver a la home</button>
    </div >
  )
}

export default Characters