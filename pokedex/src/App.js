import pikachu from './assets/pikachu.svg';
import './App.css'

const Measure = (value, type) => {
  return(
    <div className="measures">
      <img className="iconMeasure" alt="icon not found"></img>
      <p className="valueMeasure"></p>
      <footer className="typeMeasure"></footer>
    </div>
  )
}

const Moves = (value) => {
  if (value !== undefined) {
    return(
      <div>
        <p>{}</p>
        <footer>Moves</footer>
      </div>
    )
  }
}

const Specs = (weight, height, moves = undefined) => {
  return(
    <div>
      <Measure value={weight} type="weight"/>
      <Measure value={height} type="height"/>
      <Moves value={moves}/>
    </div>
  )
}

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
          <Specs className="specs" weight={5} height={4}/>
          <p className="contentAbout"></p>
        </section>
      </div>


    </body>
  );
}

export default App;
