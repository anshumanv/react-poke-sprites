import React from 'react';
import pokemonGif from 'pokemon-gif';

class PokeSprite extends React.Component {
	render() {
		const { pokemon } = this.props;
		return (
			<img
				src={pokemonGif(pokemon)}
				alt={pokemon}
			/>

		)
	}
}

export default PokeSprite;