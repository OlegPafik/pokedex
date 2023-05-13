import pikachu from './assets/pikachu.svg';
import './App.css'

function App() {
  return (
    <body className="container">
      <div className="card">
        <header className="id">
          <div className="name">Pikachu</div>
          <div className="number">#025</div>
        </header>
        <img src={pikachu} className="pokemonImage" alt="pokemon not found" />
        <section className="description">
          <div className="type"></div>
          <div className="titleAbout"></div>
          <div className="measures"></div>
          <div className="contentAbout"></div>
        </section>
      </div>


    </body>
  );
}

export default App;
