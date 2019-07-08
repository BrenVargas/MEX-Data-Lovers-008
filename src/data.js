// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const pokeFil = (data, condition) => {
  
  let pokeTrueCondition = data.filter(dataPoke => dataPoke.type[0] == condition)
  console.log(pokeTrueCondition);
  
  return pokeTrueCondition;
};

window.pokeFil = pokeFil ;

