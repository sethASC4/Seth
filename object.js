var charizard = {
    "attack" : "Blaze",
    "HP" : 266 ,
    "legendary" : false,
     "types" : ["fire","flying"]
    };

console.log(charizard.HP);

charizard.HP = 300;

console.log(charizard.HP);


function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("Clark Kent", "Being Mad OP", 3);
var batman = new Superhero("Bruce Wayn","$$$",2);
var spiderman = new Superhero("Peter Parker" , "Spider stuff" , 3);

console.log(superman);
console.log(batman);
console.log(spiderman);
