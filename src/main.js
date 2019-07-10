const data = POKEMON.pokemon;

//Código para filtrar por tipos
let imSelection = document.getElementById("select-type");
imSelection.addEventListener("click", () => {
let imValue = imSelection.options[imSelection.selectedIndex].value;
//console.log(typeof imValue);
//console.log(imValue);

let pokeFilterData = window.pokeFil(data, imValue);
 
//console.log(pokeFilterData);

const root = document.getElementById("root");


  let str = " ";
  
  pokeFilterData.forEach(element => {
    let pokeId = element.id;
    let pokeName = element.name;
    let pokeImg = element.img;
    let pokeType = element.type;
    let pokeWeaknesses = element.weaknesses;
    let pokeNextEvolution = element.next_evolution;
  
    str += `
    <div class="flip-container"><center>
    <div class="card">
    <div class="front">
    <img src="${pokeImg}" alt=""></img>
    <h2>${pokeName}</h2>
    </div>
    <div class="back">
    <p>Núm. de Pokémon: ${pokeId}</p>
    <p>Tipo de pokémon: ${pokeType}</p>
    <p>Debilidades: ${pokeWeaknesses}</p>
    </div>
    </div>
    </center></div>
    `;
  })
  root.innerHTML = str;   
  
  //Ordenar data filtrada
  
  let imOrdenation = document.getElementById("select-order");
  imOrdenation.addEventListener("click", () => {
  let imValueOrder = (imOrdenation.options[imOrdenation.selectedIndex].value);
  console.log(imValueOrder);
  console.log(typeof imValueOrder);
  
  
  //Crear parametro sortBy
  
  
  
  
  let pokeDataOrder = window.sortData(pokeFilterData, imValueOrder);
  console.log(pokeDataOrder);
  
  /*const root = document.getElementById("root");
  
  
    let str = " ";
    
    pokeDataOrder.forEach(element => {
      let pokeId = element.id;
      let pokeName = element.name;
      let pokeImg = element.img;
      let pokeType = element.type;
      let pokeWeaknesses = element.weaknesses;
      let pokeNextEvolution = element.next_evolution;
    
      str += `
      <div class="flip-container"><center>
      <div class="card">
      <div class="front">
      <img src="${pokeImg}" alt=""></img>
      <h2>${pokeName}</h2>
      </div>
      <div class="back">
      <p>Núm. de Pokémon: ${pokeId}</p>
      <p>Tipo de pokémon: ${pokeType}</p>
      <p>Debilidades: ${pokeWeaknesses}</p>
      </div>
      </div>
      </center></div>
      `;
    })
    root.innerHTML = str;
  */
  
  })
});

