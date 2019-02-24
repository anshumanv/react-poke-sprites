<p align="center">
  <img src="./Lugia.gif" alt="Lugia" align="center" width="150">
</p>

<h1 align="center"> react-poke-sprites </h1>
<p align="center">
<a href="https://www.npmjs.com/package/react-poke-sprites">
  <img src="https://img.shields.io/npm/v/react-poke-sprites.svg?style=for-the-badge" align="center">
</a>

<a href="https://www.npmjs.com/package/react-poke-sprites">
  <img src="https://img.shields.io/npm/dt/react-poke-sprites.svg?style=for-the-badge" align="center">
</a>

<a href="https://github.com/anshumanv/react-poke-sprites">
  <img src="https://img.shields.io/github/license/anshumanv/react-poke-sprites.svg?style=for-the-badge" align="center">
</a>
</p>

<hr>

<p align="center">A react component that renders animated pokemon sprites</p>


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
		className="lugia-class"
	/>,
	document.querySelector('#root')
)

```

## Props

* **pokemon** - Pass the name or the ID of the pokemon.

* **className** - Pass in a class name to modify as you see fit.


## Related

* A corresponding Vue.js component is [here](https://github.com/anshumanv/vue-poke-sprites)


### Credits
* Uses [pokemon-gif](https://www.npmjs.com/package/pokemon-gif) to retrieve links from [Pokestadium](http://www.pokestadium.com/tools/sprites).
* There's already a component for this [here](https://github.com/jackrzhang/react-pokemon-gif) but it wasn't working in my case so I decided to create my own.


## Author

[Anshuman Verma](https://github.com/anshumanv)

[<img src="https://image.flaticon.com/icons/svg/185/185961.svg" width="35" padding="10">](https://twitter.com/Anshumaniac12)
[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://linkedin.com/in/anshumanv12)
[<img src="https://image.flaticon.com/icons/svg/185/185981.svg" width="35" padding="10">](https://www.facebook.com/anshumanv12)
[<img src="https://image.flaticon.com/icons/svg/985/985680.svg" width="35" padding="10">](https://www.paypal.me/AnshumanVerma)


## Contribute
Found a bug, please [create an issue](https://github.com/anshumanv/react-poke-sprites/issues/new)


## License

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/anshumanv/react-poke-sprites/blob/master/LICENSE)
> © Anshuman Verma