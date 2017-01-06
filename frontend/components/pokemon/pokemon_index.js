import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemon = this.props.pokemon.map(poke => {
      return <PokemonIndexItem key={poke.id} pokemon={poke} />;
    });
    let children = this.props.children;
    return (
      <section className="pokedex">
        <ul>
          {pokemon}
        </ul>
        {children}
      </section>
    );
  }
}

export default PokemonIndex;
