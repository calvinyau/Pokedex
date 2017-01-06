import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pokemonId = this.props.pokemon.id;
    return <li>
      <Link to={`/pokemon/${this.props.pokemon.id}`}>
        <div>{this.props.pokemon.name}</div>
        <img src={this.props.pokemon.image_url} />
      </Link>
    </li>;
  }
}

export default PokemonIndexItem;
