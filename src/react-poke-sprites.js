import React from 'react';
import pokemonGif from 'pokemon-gif';
import pokemonPropType from './pokemon-prop';

class PokeSprite extends React.Component {
	render() {
		const { pokemon, className } = this.props;
		return (
			<img
				src={pokemonGif(pokemon)}
				alt={pokemon}
				className={className}
			/>

		)
	}
}

PokeSprite.defaultProps = {
	className: '',
}

PokeSprite.propTypes = {
	pokemon: pokemonPropType.isRequired,
	className: PropTypes.string
}

export default PokeSprite;