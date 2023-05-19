import axios from "axios";

const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

export const api = {
  getPokemonByName: async (pokemonName) => {
    axios
      .get(URL_POKEMON_API + pokemonName)
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  },
};
