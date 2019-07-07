const data = POKEMON.pokemon;

let imSelection = document.getElementById("select-type");
imSelection.addEventListener("click", () => {
//let imSelection = document.getElementById("select-type");
let imValue = imSelection.options[imSelection.selectedIndex].value;
console.log(typeof imValue);
console.log(imValue);
let pokeFilterData = window.pokeFil(data, imValue)

console.log(pokeFilterData);

const root = document.getElementById("root");


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
  

    
  
});


