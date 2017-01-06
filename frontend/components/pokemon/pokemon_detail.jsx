import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  render() {
    const {pokemonDetail, children } = this.props;
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemonDetail.image_url} alt={pokemonDetail.name} />
        </figure>
        <ul>
          <li><h2>{pokemonDetail.name}</h2></li>
          <li>Type: {pokemonDetail.poke_type}</li>
          <li>Attack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves}</li>
        </ul>


      </section>
    );
  }


}

export default PokemonDetail;
