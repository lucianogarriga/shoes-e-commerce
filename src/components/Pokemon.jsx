import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1); 

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, [id]);

  const handleNext = () => {
    setId(id + 1);
  };

  const handlePrev = () => {
    {
      id > 1 && setId(id - 1);
    }
  };

  return (
    <div>
      <div>Pokemon</div>
      <h4>
        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <br />
            {id > 1 
                ? <button onClick={handlePrev}>Anterior</button>
                : <button disabled>Anterior</button>
            } 
            <button onClick={handleNext}>Siguiente</button>
          </div>
        )}
      </h4>
    </div>
  );
};

export default Pokemon;
