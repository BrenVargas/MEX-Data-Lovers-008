const data = POKEMON.pokemon;

//Código para filtrar por tipos
let imSelection = document.getElementById("select-type");
imSelection.addEventListener("change", () => {
let imValue = imSelection.options[imSelection.selectedIndex].value;
//console.log(typeof imValue);
//console.log(imValue);

let pokeFilterData = window.data.filterData(data, imValue);
  
  
//Ordenar data filtrada
  
  let imOrdenation = document.getElementById("select-order");
  imOrdenation.addEventListener("change", () => {
  let imValueOrder = (imOrdenation.options[imOrdenation.selectedIndex].value);
  console.log(imValueOrder);
  console.log(typeof imValueOrder);

  let imAscent = document.getElementById("select-sortOrder");
  imAscent.addEventListener("change", () => {
    let sorValue = (imAscent.options[imAscent.selectedIndex].value);
    console.log(sorValue);
    
    let pokeDataOrder = window.data.sortData(pokeFilterData, imValueOrder, sorValue);
    console.log(pokeDataOrder);
    const root = document.getElementById("root");


  let str = " ";
  
  pokeDataOrder.forEach(element => {
    let pokeId = element.id;
    let pokeName = element.name;
    let pokeImg = element.img;
    let pokeType = element.type;
    let pokeWeaknesses = element.weaknesses;

    str += `
    <div class="flip-container"><center>
    <div class="card">
    <div class="front">
    <img class="imgpoke" src="${pokeImg}" alt=""></img>
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
  });
root.innerHTML = str;
    
  });
  
  
  
  });
});


let modal= document.getElementById("miModal");
let flex= document.getElementById("flex");
let abrir= document.getElementById("abrir");
let cerrar= document.getElementById("close");


abrir.addEventListener("click", function(){
 modal.style.display = "block";

});

cerrar.addEventListener("click", function(){
 modal.style.display = "none";

});

window.addEventListener("click", function(e){
 if(e.target == flex){
   modal.style.display = "none";
 }
});