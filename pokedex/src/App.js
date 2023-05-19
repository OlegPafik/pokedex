import "./App.css";
import Pokemon from "./pokemon.js";
import api from "./api.js";
import { useEffect, useState } from "react";

function App({ pokemons }) {
  const [pokemonsUrls, setPokemonsUrls] = useState([]);

  useEffect(() => {
    const fetchPokemons = async (limit) => {
      const urls = await api.getPokemonsByLimit(limit);
      setPokemonsUrls(urls);
      alert(JSON.stringify(urls));
    };
    fetchPokemons();
  }, []);

  return (
    <body>
      <header>This is my header</header>
      <section className="allCards">
        {[].map((eachPokemon) => {
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
