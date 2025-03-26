//DESARROLLA AQUI TUS SOLUCIONES
//numero 1//
async function getRandomPokemon(){
    const random = Math.floor(Math.random() * 1302) + 1 ;
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);}
       const data = await response.json();
       return data;
} catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomPokemon().then((data) => console.log(data))

//numero 2//
async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
};
 // numero 3//

 

printImageAndName('pikachu')
  .then(html => console.log(html));
 // numero 4//
 async function getRandomDogImage(){
    try{
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);}
       const url = await response.json();
       return url.message;
} catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomDogImage().then((url) => console.log(url))
  
// numero 5//

async function getRandomPokemonImage(){
  const random = Math.floor(Math.random() * 1302) + 1 ;
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);}
       const data = await response.json();
       return data.sprites.front_default;
} catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomPokemonImage().then((url) => console.log(url))
  
// numero 6//

//numero 7//
 async function getRandomCharacter() {
  const random = Math.floor(Math.random() * 826) + 1 ;
  try{
    const response = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
   if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
  }
   const data = await response.json();
   return data;
} catch (error) {
console.error('Hubo un problema con la solicitud:', error.message);
}
};
getRandomCharacter().then((data) => console.log(data))
  
 
