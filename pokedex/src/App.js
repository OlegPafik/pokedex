import pikachu from './assets/pikachu.svg';
import imgWeight from './assets/imgWeight.svg'
import imgHeight from './assets/imgHeight.svg'
import './App.css'

const Measure = ({value, type}) => {
  const image = (type === "Weight") ? imgWeight : imgHeight
  const shownValue = (type === "Weight") ? (value + " kg") : (value + " m")
  
  return (
    <div className="spec__content">
      <div
        className={`spec__content--value-${type} spec__content--value`}
      >
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


function App({pokemon}) {
  return (
    <body>
      <section className="allCards">
        <div className="card">
          <img
            src={pokemon.src}
            className="card__pokemonImage"
            alt="pokemon not found"
          />
          <header className="card__id">
            <div className="card__id--name">{pokemon.name}</div>
            <div className="card__id--number">{pokemon.id}</div>
          </header>
          <section className="card__description">
            <div className="card__description--type">{pokemon.types[0]}</div>
            <div className="card__description--titleAbout">About</div>
            <Specs
              weight={pokemon.weight}
              height={pokemon.height}
              moves={pokemon.moves}
            />
            <p className="card__description--contentAbout">
              {pokemon.description}
            </p>
          </section>
        </div>
      </section>
    </body>
  );
}

export default App;
