import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import pikachu from "./assets/pikachu.svg";

const pokemonPikachu = {
  id: "#025",
  name: "Pikachu",
  height: "0.4",
  weight: "6.0",
  types: ["Electric"],
  src: pikachu,
  description:
    "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
  moves: "pika pika",
};
const allPokemons = [
  pokemonPikachu,
  pokemonPikachu,
  pokemonPikachu,
  pokemonPikachu,
  pokemonPikachu,
  pokemonPikachu,
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App pokemons={allPokemons} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
