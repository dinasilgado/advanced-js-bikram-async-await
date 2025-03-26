//DESARROLLA AQUI TUS SOLUCIONES
//numero 1//
async function getRandomPokemon() {
  const random = Math.floor(Math.random() * 150) + 1;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomPokemon().then(data => console.log(data))

//numero 2//
async function getImageAndName(pokemon) {

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img }
};
// numero 3//
async function printImageAndName() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  let data = await response.json();
  let name = data.name
  let img = data.sprites.front_default

  let pkmonimg = document.createElement("img")
  let pkmonname = document.createElement("h1")
  pkmonimg.src = img
  pkmonname.textContent = name
  document.body.appendChild(pkmonimg)
  document.body.appendChild(pkmonname)
  return `<section>
  <img src="${img}" alt="${name}">
  <h1>${name}</h1>
  </section>`;
};

// numero 4//
async function getRandomDogImage() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    const url = await response.json();
    return url.message;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomDogImage().then(url => console.log(url))

// numero 5//

async function getRandomPokemonImage() {
  const random = Math.floor(Math.random() * 150) + 1;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
};
getRandomPokemonImage().then(url => console.log(url))

// numero 6//

async function printPugVsPikachu() {
  try {

    let pugResponse = await fetch("https://dog.ceo/api/breed/pug/images");
    let pugData = await pugResponse.json();
    let pugImg = pugData.message[4]

    let pikachuResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    let pikachuData = await pikachuResponse.json();
    let pikachuImg = pikachuData.sprites.front_default;

    let pugImgElement = document.createElement('img');
    pugImgElement.src = pugImg;
    document.body.appendChild(pugImgElement);

    let pikachuImgElement = document.createElement('img');
    pikachuImgElement.src = pikachuImg;
    document.body.appendChild(pikachuImgElement);

  } catch (error) {
    console.error('Error fetching images:', error.message);
  }
}
printPugVsPikachu()

//numero 7//
async function getRandomCharacter() {
  const random = Math.floor(Math.random() * 150) + 1;
  try {
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
getRandomCharacter().then(data => console.log(data))

// numero 8//
async function getRandomCharacterInfo() {
  const random = Math.floor(Math.random() * 150) + 1;
  try {
    let response = await fetch(`https://rickandmortyapi.com/api/character/2`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    let rickandmortydata = await response.json();
    let name = rickandmortydata.name
    let img = rickandmortydata.image
    let episodes = rickandmortydata.episode

    let firstEpisodeUrl = rickandmortydata.episode[0]
    let episoderesponse = await fetch(firstEpisodeUrl);
    let episodedata = await episoderesponse.json();

    let firstEpisode = episodedata.name
    let dateEpisode = episodedata.air_date

    return { img, name, episodes, firstEpisode, dateEpisode }

  }catch (error) {
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}
getRandomCharacterInfo().then(data => console.log(data))

