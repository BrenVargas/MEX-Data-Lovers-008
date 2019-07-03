// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return "example";
};

window.example = example;

// console.log(POKEMON)

const root = document.getElementById("root");

const data = POKEMON.pokemon;

let str = " ";

data.forEach(element => {
  let id = element.id;
  let num = element.origin;
  let name = element.name;
  let img = element.img;
  let type = element.type;
  let weaknesses = element.weaknesses;

  str += `
  <h2>${id}</h2>
<h1 class>${name}</h1>
    <p>${type}</p>
    <p>${weaknesses}</p>
    <img src="${img}" alt=""></img>`;
});

root.innerHTML = str;

// data.forEach(element => {
//   let id: element.id  num, name, img, type, weaknesses

// })
