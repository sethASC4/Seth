
var array1=["Pikachu",23,100];
var array2=["Charizard",50,200]

function pokeAttack(array1,array2){
    array2[2] -= array1[1];
    return array2;
}

console.log(pokeAttack(array1,array2));

