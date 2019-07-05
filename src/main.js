const data = POKEMON.pokemon;

// document.getElementById("select-type").addEventListener("click", () => {


const root = document.getElementById("root");


const printPokemons = (data) => {
let str = " ";

data.forEach(element => {
  let pokeId = element.id;
  let pokeNum = element.num;
  let pokeName = element.name;
  let pokeImg = element.img;
  let pokeType = element.type;
  let pokeWeaknesses = element.weaknesses;
  let pokeNextEvolution = element.next_evolution;

  str += `
  <h2>${pokeName}</h2> 
  <img src="${pokeImg}" alt=""></img>
  <p>${pokeType}</p>  
  <p>${pokeWeaknesses}</p> 
  
 
  `;
})

root.innerHTML = str;
}

// printPokemons(data);  



// })

const selectType = document.getElementById("select-type");

selectType.addEventListener("change", () => {
  const selectUser = selectType.value
  // const pokeFilter = data.filter(tierra => tierra.type.includes(selectUser));
  const pokeFilter = data.filter(pokemones => pokemones.type[0] == selectUser);
  console.log(pokeFilter);
  printPokemons(pokeFilter)
})





    

/* <h2>ID: ${pokeId}</h2>
  <h2>NÚM: ${pokeNum}</h2> */

