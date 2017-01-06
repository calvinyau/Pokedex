import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = ({ pokemonDetail }) => {
  return {
    pokemonDetail
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;
