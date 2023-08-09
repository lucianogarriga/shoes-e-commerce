import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [currentList, setCurrentList] = useState({});
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`
  );
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrentList(data);
        setNext(data.next);
        setPrev(data.previous);
      });
  }, [url]);

  const handlePrev = () => {
    setUrl(prev);
  };
  const handleNext = () => {
    setUrl(next);
  };

  return (
    <div>
      PokemonList
      {currentList.results && (
        <div>
          {currentList.results.map((pokemon, index) => {
            return (
              <div key={index}>
                <p>{pokemon.name}</p>
                <a href={pokemon.url}>See pokemon</a>
              </div>
            );
          })}
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
