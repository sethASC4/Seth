var prompt = require("prompt-sync")();
function rand(upperBd){
return (Math.floor(Math.random()*upperBd));
}
mashArray = ["Dream Land","Great Maze","Omega Stage","Mushroom Kingdom"];
firstquestion = [7,9];
secondquestion = ["Mario","Donkey Kong","Izi","Thomas","Cyril","Tupac"];


function smash(){
    var randsmash = rand(mashArray.length);
    var answer = prompt("How many times will you strike?");
    var answer2 = prompt("Who will you choose to fight?");
     firstquestion.push(answer);
     secondquestion.push(answer2);
     console.log("you fought " + answer2 + " in the " + mashArray[randsmash] + " and hit them"
+ answer + " times.");}


function smashrandom(){
    var randsmash = rand(firstquestion.length);
    var randsmash2 = rand(secondquestion.length);
    var randsmash3 = rand(mashArray.length);
    console.log("you fought " + secondquestion[randsmash2] + " in the " + mashArray[randsmash3] +
     " and hit them" + firstquestion[randsmash] + " times.");
}

smashrandom();



