const data = POKEMON.pokemon;

let imSelection = document.getElementById("select-type");
imSelection.addEventListener("click", () => {
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
  
    str += `<div class="w3-card-8"><center>
    <h2 class=""> Nombre del pokémon: ${pokeName}</h2> 
    <img src="${pokeImg}" alt=""></img>
    <p>Tipo de pokémon: ${pokeType}</p>  
    <p>Debilidades: ${pokeWeaknesses}</p> 
    
   </center></div>
    `;
  })
  root.innerHTML = str;
  

    
  
});


