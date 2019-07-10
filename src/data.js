// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Filtar data 
const filterData = (data, condition) => {
  
  let pokeTrueCondition = data.filter(dataPoke => dataPoke.type[0] == condition || dataPoke.type[1] == condition || dataPoke[2] == condition)
  console.log(pokeTrueCondition);
  
  return pokeTrueCondition;
};

window.filterData = filterData ;

//Ordenar data filtrada

const sortData = (data, sortBy, sortOrder) => {
  let orderCamp = data.sort((a,b) => {
    if (sortOrder == "menor-mayor") {
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
}
if (sortOrder == "mayor-menor") {
  if(sortBy == "name"){
    return b.name.localeCompare(a.name);
  }

  if (sortBy == "id") {
    return b.id - a.id;
  }

  if (sortBy == "weaknesses") {
    return b.weaknesses - a.weaknesses;
  }
}
  })
  return orderCamp;
  
};

window.sortData = sortData;