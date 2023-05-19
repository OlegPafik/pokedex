const URL_POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=";

async function fetchPokemon(pokemonIndex) {
  const response = await fetch(pokemonIndex.url);

  const pokemonAllInfo = await response.json();

  const pokemon = {
    id: pokemonAllInfo.id,
    name: pokemonAllInfo.name,
    height: pokemonAllInfo.height,
    weight: pokemonAllInfo.weight,
    types: pokemonAllInfo.types.map((slot) => slot.type["name"]),
    src: pokemonAllInfo.sprites.other["official-artwork"].front_default,
    description: "description of " + pokemonAllInfo.name,
    moves: pokemonAllInfo.moves.slice(0, 1).map((slot) => slot.move["name"]),
  };
  return pokemon;
}

const api = {
  getPokemonsByLimit: async (limit) => {
    const response = await fetch(URL_POKEMON_API + limit);
    const limitedListPokemons = await response.json();
    const pokemonUrls = limitedListPokemons.results;

    const allPokemons = await Promise.all(
      pokemonUrls.map(async (pokemonIndex) => await fetchPokemon(pokemonIndex))
    );
    return allPokemons;
  },
};
export default api;
