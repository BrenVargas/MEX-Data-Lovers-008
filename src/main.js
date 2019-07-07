const data = POKEMON.pokemon;

// document.getElementById("select-type").addEventListener("click", () => {


//const root = document.getElementById("root");


/*const printPokemons = (data) => {
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
*/
let imSelection = document.getElementById("select-type");
imSelection.addEventListener("click", () => {
//let imSelection = document.getElementById("select-type");
let imValue = imSelection.options[imSelection.selectedIndex].value;
console.log(typeof imValue);
console.log(imValue);


/*let pokeCondition = (data, imValue) => {if(imValue == data.type){
  printPokemons
  return printPokemons
}};*/
let pokeFilterData = window.pokeFil(data, imValue);
//let conditionFil = (pokeFilterData) => printPokemons;
//console.log(conditionFil);

console.log(pokeFilterData);

const root = document.getElementById("root");

const printPokemons = (pokeFilterData) => {
  let str = " ";
  
  pokeFilterData.forEach(element => {
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

});


