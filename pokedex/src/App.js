import "./App.css";
import Pokemon from "./pokemon.js";
import api from "./api.js";
import { useEffect, useState } from "react";

function App({ limit }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async (limit) => {
      const receivedPokemons = await api.getPokemonsByLimit(limit);

      setPokemons(receivedPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <body>
      <header>This is my header</header>
      <section className="allCards">
        {pokemons.map((eachPokemon) => {
          return <Pokemon pokemon={eachPokemon} />;
        })}
      </section>
      <footer>
        <p>This is my footer</p>
      </footer>
    </body>
  );
}

export default App;
