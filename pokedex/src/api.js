const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=";

async function fetchPokemons(pokemonIndex) {
  const response = await fetch(pokemonIndex.url);

  const pokemonAllInfo = await response.json();
  //console.log(JSON.stringify(pokemonAllInfo.types[0].type.name));
  const pokemon = {
    id: pokemonAllInfo.id,
    name: pokemonAllInfo.name,
    height: pokemonAllInfo.height,
    weight: pokemonAllInfo.weight,
    types: pokemonAllInfo.types.map((slot) => slot.type["name"]), // pokemonAllInfo.types.type.map((x) => x["name"]),
    // pokemonAllInfo.types.map((type) => type["name"]),
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
