import pikachu from './assets/pikachu.svg';

function App() {
  return (
    <section className="container">
      <img src={pikachu} className="pokemonImage" alt="pokemon not found" />
    </section>
  );
}

export default App;
