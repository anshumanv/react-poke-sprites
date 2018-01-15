import pokedexNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';
import pokemonNameToNumber from 'pokemon-gif/lib/pokemon-name-to-number';

function createValidatorWithRequired(validator) {
  const chainValidatorWithIsRequired = (isRequired, props, propName, componentName, location) => {
    if (isRequired && props[propName] == null) {
      return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\`.`);
    }

    return validator(props, propName, componentName, location);
  };

  const validatorWithIsRequired = chainValidatorWithIsRequired.bind(null, false);
  validatorWithIsRequired.isRequired = chainValidatorWithIsRequired.bind(null, true);

  return validatorWithIsRequired;
}

function pokemonValidator(props, propName, componentName) {
  const prop = props[propName];

  if (typeof prop === 'string') {
    if (!pokemonNameToNumber.hasOwnProperty(prop.toLowerCase())) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.
        Prop \`${propName}\` must be a valid pokemon name.`);
    }

    return null;
  } else if (typeof prop === 'number') {
    if (!pokedexNumberToName.hasOwnProperty(prop)) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.
        Prop \`${propName}\` must be a valid pokedex number.`);
    }

    return null;
  }

  return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.
    Prop \`${propName}\` must be of type string or number.`);
}

export default createValidatorWithRequired(pokemonValidator);