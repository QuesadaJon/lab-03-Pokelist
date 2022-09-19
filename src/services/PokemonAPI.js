import request from 'superagent';

const sleep = (time) => new Promise((resolve, reject) =>{
  setTimeout(() => {
      resolve()
  }, time)
});

export const getAllPokemon = async ( pageNumber ) => {
  await sleep(6800)
  return fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${pageNumber}&perPage=24`
  )
    .then(res => res.json());

}

export const getPokemon = async (  pageNumber, search, pokemon, type, attribute, ) => {
  return fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${pageNumber}${search}${pokemon}${type}${attribute}&perPage=24`
  )
    .then(res => res.json());
}