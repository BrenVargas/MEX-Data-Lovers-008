const pokeData = POKEMON;
const pokeMones = pokeData.pokemon;
let pokeNames = pokeMones.filter(name => {
    for (let i = 0; i <= 99; i = i + 1){
        let pokeImg = pokeMones[i]["img"];
        console.log(pokeImg);
        let pokeNam = pokeMones[i]["name"];
        console.log(pokeNam);
        let pokeId = pokeMones[i]["id"]
        console.log(pokeId);
        let pokeType = pokeMones[i]["next_evolution"]
        console.log(pokeType);
        let pokeType1 = pokeMones[i]["prev_evolution"]
        console.log(pokeType1);
        let pokeWeak = pokeMones[i]["weaknesses"]
        console.log(pokeWeak);
                
           
        }
    
    //console.log(name);
    
})
    
    //console.log(pokeData);
    //console.log(pokeMones);
    

    
