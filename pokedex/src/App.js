import pikachu from './assets/pikachu.svg';
import imgWeight from './assets/imgWeight.svg'
import imgHeight from './assets/imgHeight.svg'
import './App.css'

const Measure = ({value, type}) => {
  const image = (type === "Weight") ? imgWeight : imgHeight
  const shownValue = (type === "Weight") ? (value + " kg") : (value + " m")
  
  return (
    <div className="spec__content">
      <div className={"spec__content--value-" + { type }}>
        <img src={image} alt="icon not found"></img>
        <p> {shownValue} </p>
      </div>
      <footer className="spec__content-type"> {type} </footer>
    </div>
  );
}

const Moves = ({value}) => {
  if (value !== undefined) {
    return (
      <div className="spec__content">
        <p className="spec__content--value">{value}</p>
        <footer className="spec__content-type">Moves</footer>
      </div>
    );
  }
}

const Specs = ({weight, height, moves = undefined}) => {
  return (
    <div className="card__description--specs">
      <Measure value={weight} type="Weight" />
      <Measure value={height} type="Height" />
      <Moves value={moves} />
    </div>
  );
}

const pokemonPikachu = {
  id: "#025",
  name: "Pikachu",
  height: "0.4",
  weight: "6.0",
  types: ["Electric"],
  src: pikachu,
  description:
    "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
};

function App() {
  return (
    <body>
      <section className="allCards">
        <div className="card">
          <img
            src={pikachu}
            className="card__pokemonImage"
            alt="pokemon not found"
          />
          <header className="card__id">
            <div className="card__id--name">Pikachu</div>
            <div className="card__id--number">#025</div>
          </header>
          <section className="card__description">
            <div className="card__description--type">Electric</div>
            <div className="card__description--titleAbout">About</div>
            <Specs weight={"6,0"} height={"0,4"} />
            <p className="card__description--contentAbout">
              Pikachu that can generate powerful electricity have cheek sacs
              that are extra soft and super stretchy.
            </p>
          </section>
        </div>
      </section>
    </body>
  );
}

export default App;
