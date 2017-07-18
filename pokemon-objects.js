function Pokemon(type,hp,attack,defense){
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
}

var Steelix = new Pokemon(["Steel,Ground"],75,85,200);
var Feraligatr = new Pokemon("Water", 85, 105,100);
var Sharpedo = new Pokemon(["dark","Water"],70,120,40);
var Beartic = new Pokemon("Ice",95,110,80);
var Krookodile = new Pokemon(["Dark","Ground"],95,117,80);
var Infernape = new Pokemon(["Fire","Fighting"],76,104,71);

// console.log(Steelix);
// console.log(Feraligatr);
// console.log(Sharpedo);
// console.log(Beartic);
// console.log(Krookodile);
// console.log(Infernape);
var pokeRoster =[Steelix,Feraligatr,Sharpedo,Beartic,Krookodile,Infernape];

function printRoster(roster){
    console.log("Printing Roster!");
    for(var i =0;i<roster.length;i++){
    console.log(roster[i]);
    };
};

function pokemonAttacked(roster){
    for(var i =0;i<roster.length;i++){
        roster[i].hp = roster[i.hp - 10];
    }
    printRoster(roster);
}



