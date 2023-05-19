import "./App.css";
import Pokemon from "./pokemon.js";

function App({ pokemons }) {
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
