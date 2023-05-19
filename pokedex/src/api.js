const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=";
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
  //   getPokemonByUrl: async (pokemonUrl) => {
  //     axios
  //       .get(pokemonUrl)
  //       .then((response) => {
  //         let pokemon_response = response.data;
  //         console.log(pokemon_response);
  //         let pokemon = {
  //           id: pokemon_response.id,
  //           name: pokemon_response.name,
  //           height: pokemon_response.height,
  //           weight: pokemon_response.width,
  //           types: [],
  //           src: "description of " + pokemon_response.name,
  //           description: "description of " + pokemon_response.name,
  //           moves: "",
  //         };
  //         return pokemon;
  //       })
  //       .catch((error) => {
  //         return {};
  //       });

  getPokemonsByLimit: async (limit) => {
    const response = await fetch(URL_POKEMON_API + limit);
    const limitedListPokemons = await response.json();
    const pokemonUrls = limitedListPokemons.results;
    pokemonUrls.map(async (pokemonIndex) => {
      const response = await fetch(pokemonIndex.url);
      console.log(await response.json());
    });

    return [];
  },
};
export default api;
