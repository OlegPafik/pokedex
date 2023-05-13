import pikachu from './assets/pikachu.svg';
import imgWeight from './assets/imgWeight.svg'
import imgHeight from './assets/imgHeight.svg'
import './App.css'

const Measure = ({value, type}) => {
  const image = (type === "Weight") ? imgWeight : imgHeight
  const shownValue = (type === "Weight") ? (value + "kg") : (value + "m")
  
  return(
    <div className="measures">
      <img className="iconMeasure" src={image} alt="icon not found"></img>
      <p className="valueMeasure"> {shownValue} </p>
      <footer className="typeMeasure"> {type} </footer>
    </div>
  )
}

const Moves = ({value}) => {
  if (value !== undefined) {
    return(
      <div>
        <p>{value}</p>
        <footer>Moves</footer>
      </div>
    )
  }
}

const Specs = ({weight, height, moves = undefined}) => {
  return(
    <div>
      <Measure value={weight} type="Weight"/>
      <Measure value={height} type="Height"/>
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
