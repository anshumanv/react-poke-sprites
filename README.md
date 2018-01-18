# react-poke-sprites [![npm](https://img.shields.io/npm/v/react-poke-sprites.svg)](https://www.npmjs.com/package/react-poke-sprites) [![npm](https://img.shields.io/npm/dt/react-poke-sprites.svg)](https://www.npmjs.com/package/react-poke-sprites) <img src="./lugia.gif" alt="Lugia" align="right">	

> A react component that renders animated pokemon sprites

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/anshumanv/react-poke-sprites)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](https://github.com/anshumanv/react-poke-sprites)
[![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](https://github.com/anshumanv/react-poke-sprites)

### Installation
Install the npm module in your app directory.
```sh
npm i -S react react-dom react-poke-sprites
```

### Usage

```js
import React from 'React';
import ReactDOM from 'react-dom'
import PokeSprite from 'react-poke-sprites'

ReactDOM.render(
	<PokeSprite
		pokemon={'Lugia'}
	/>,
	document.querySelector('#root')
)

```

### Credits
* Uses [pokemon-gif](https://www.npmjs.com/package/pokemon-gif) to retrieve links from [Pokestadium](http://www.pokestadium.com/tools/sprites).
* There's already a component for this [here](https://github.com/jackrzhang/react-pokemon-gif) but it wasn't working in my case so I decided to create my own.

## Author

Anshuman Verma

[<img src="https://image.flaticon.com/icons/svg/34/34238.svg" width="50" padding="10">](https://twitter.com/Anshumaniac12)
[<img src="https://www.shareicon.net/download/2015/11/02/665921_internet.svg" width="50" padding="10">](https://linkedin.com/in/anshumanv12)
[<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="50" padding="10">](https://github.com/anshumanv)

## Contribute
Found a bug, please [create an issue](https://github.com/anshumanv/react-poke-sprites/issues/new)

## License

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/anshumanv/react-poke-sprites/blob/master/LICENSE)
> © Anshuman Verma