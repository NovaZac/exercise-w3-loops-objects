const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

pokemons.forEach((name => {
  console.log(name)
}))

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
const pokemonP = {
  name: 'Pikachu',
  strength: 28,
  element: 'electric',
  color: 'yellow',
  amountOfLegs: 2
}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log(`${pokemonP.name} is an ${pokemonP.color} ${pokemonP.element} pokemon with the strenght of`, pokemonP.strength)

// 4)
// Add the property stillToCatch: true to the Pikachu object.

pokemonP.stillToCatch = true

// 5)
// change the value of the key strength in the Pikachu object.

pokemonP.strength = 55

// 6)
// Delete a property from the Pikachu object.

delete pokemonP.amountOfLegs

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  },
  {
    name: "Ivysaur",
    element: "ice",
    strength: 40
  },
  {
    name: "Weedle",
    element: "wind",
    strength: 51
  },
  {
    name: "Squirtle",
    element: "dirt",
    strength: 18
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

moreAboutPokemons.forEach(pokemon => {
  console.log(pokemon.name);
});

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

moreAboutPokemons.forEach(pokemon => {
  console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the strenght of`, pokemon.strength);
});