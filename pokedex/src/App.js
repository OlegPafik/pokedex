import pikachu from './assets/pikachu.svg';
import imgWeight from './assets/imgWeight.svg'
import imgHeight from './assets/imgHeight.svg'
import './App.css'

const Measure = ({value, type}) => {
  const image = (type === "Weight") ? imgWeight : imgHeight
  const shownValue = (type === "Weight") ? (value + "kg") : (value + "m")
  
  return(
    <div className="spec">
      <img className="iconMeasure" src={image} alt="icon not found"></img>
      <p className="valueMeasure"> {shownValue} </p>
      <footer className="typeMeasure"> {type} </footer>
    </div>
  )
}

const Moves = ({value}) => {
  if (value !== undefined) {
    return(
      <div className="spec">
        <p>{value}</p>
        <footer>Moves</footer>
      </div>
    )
  }
}

const Specs = ({weight, height, moves = undefined}) => {
  return(
    <div className="innerSpecs">
      <Measure value={weight} type="Weight"/>
      <Measure value={height} type="Height"/>
      <Moves value={moves}/>
    </div>
  )
}

function App() {
  return (
    <body>
      <section className="allCards">
        <div className="card">
          <img src={pikachu} className="card__pokemonImage" alt="pokemon not found" />
          <header className="card__id">
            <div className="card__id--name">Pikachu</div>
            <div className="card__id--number">#025</div>
          </header>
          <section className="card__description">
            <div className="card__description--type">Electric</div>
            <title className="card__description--titleAbout">About</title>
            <Specs className="card__description--specs" weight={5} height={4}/>
            <p className="card__description--contentAbout">Big pokemon eleeeeeeeeeeeeeeeeeeeeeeectric</p>
          </section>
        </div>
      </section>
    </body>
  );
}

export default App;
