import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemon = this.props.pokemon.map((poke, index) => {
      return <li key={index}>
        <div>{poke.name}</div>
        <img src={poke.image_url} />
      </li>;
    });
    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

export default PokemonIndex;
