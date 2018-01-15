import React, {PropTypes} from 'react';
import pokemonGif from 'pokemon-gif';
import pokemonPropType from './pokemon-prop';
import pokemonNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';

class PokeSprite extends React.Component {
	render() {
		const { pokemon, className } = this.props;
		const name = typeof pokemon === 'string' ? pokemon : pokemonNumberToName[pokemon];
		return (
			<img
				src={pokemonGif(name)}
				alt={name}
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