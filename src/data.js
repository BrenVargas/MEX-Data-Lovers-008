// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Filtar data 
const pokeFil = (data, condition) => {
  
  let pokeTrueCondition = data.filter(dataPoke => dataPoke.type[0] == condition || dataPoke.type[1] == condition || dataPoke[2] == condition)
  console.log(pokeTrueCondition);
  
  return pokeTrueCondition;
};

window.pokeFil = pokeFil ;

//Ordenar data filtrada

const sortData = (data, sortBy) => {
  let orderAsODes = data.sort((a,b) => {
    if(sortBy == "name"){
    if (a.name > b.name) {
      return 1;
    };
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }

  if (sortBy == "id") {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  }

  if (sortBy == "weaknesses") {
    if (a.weaknesses > b.weaknesses) {
      return 1;
    }
    if (a.weaknesses < b.weaknesses) {
      return -1;
    }
    return 0;
  }
  })
  return orderAsODes;
};

window.sortData = sortData;