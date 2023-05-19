const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=";

async function fetchPokemons(pokemonIndex) {
  const response = await fetch(pokemonIndex.url);

  const pokemonAllInfo = await response.json();

  const pokemon = {
    id: pokemonAllInfo.id,
    name: pokemonAllInfo.name,
    height: pokemonAllInfo.height,
    weight: pokemonAllInfo.width,
    types: ["electric"],
    src: "description of " + pokemonAllInfo.name,
    description: "description of " + pokemonAllInfo.name,
    moves: ["move1"],
  };
  return pokemon;
}

const api = {
  getPokemonsByLimit: async (limit) => {
    const response = await fetch(URL_POKEMON_API + limit);
    const limitedListPokemons = await response.json();
    const pokemonUrls = limitedListPokemons.results;

    const allPokemons = await Promise.all(
      pokemonUrls.map(async (pokemonIndex) => await fetchPokemons(pokemonIndex))
    );
    return allPokemons;
  },
};
export default api;
