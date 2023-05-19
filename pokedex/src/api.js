import axios from "axios";

const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";
/*

  id: "#025",
  name: "Pikachu",
  height: "0.4",
  weight: "6.0",
  types: ["Electric"],
  src: pikachu,
  description:
    "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
  moves: "pika pika",
*/

const api = {
  getPokemonByName: async (pokemonName) => {
    axios
      .get(URL_POKEMON_API + pokemonName)
      .then((response) => {
        let pokemon_response = response;
        alert(pokemon_response);
      })
      .catch((error) => {
        alert(error);
      });
  },
};
export default api;
