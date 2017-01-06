import _ from "lodash";

export const selectAllPokemon = (state) => {
  return _.values(state.pokemon);
};

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
	const foundItem = pokemonDetail.items.find(item => item.id === itemId);
	return foundItem || {};
};
