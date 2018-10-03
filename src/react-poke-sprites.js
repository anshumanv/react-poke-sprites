import React from 'react';
import pokemonGif from 'pokemon-gif';
import pokemonPropType from './pokemon-prop';
import PropTypes from 'prop-types';
import pokemonNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';

class PokeSprite extends React.Component {
	get gifUrl () {
		const { pokemon, className } = this.props;
		const name = typeof pokemon === 'string' ? pokemon : pokemonNumberToName[pokemon];
		let url = '';
		try {
			url = pokemonGif(name);
		} catch (e) {
			console.log(e);
			url = '';
		}
		return url;
	}
	render() {
		const { pokemon, className } = this.props;
		const name = typeof pokemon === 'string' ? pokemon : pokemonNumberToName[pokemon];
		
		if (!this.gifUrl) {
			return null;
		}
		
		return (
			<img
				src={this.gifUrl}
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
