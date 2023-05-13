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
          <title className="titleAbout"></title>
          <div className="measures">
            <img className="iconMeasure" alt="icon not found"></img>
            <p className="valueMeasure"></p>
            <p className="typeMeasure"></p>
          </div>
          <p className="contentAbout"></p>
        </section>
      </div>


    </body>
  );
}

export default App;
