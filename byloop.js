
// var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');

// var counter =1;
// while(counter < 11) {
    // console.log(counter);
    // counter++;
// }

var prompt = require("prompt-sync")();
var money = 1000;
var items =[];


while(money > 99){
    console.log("You have $" + money + "left. Shirt = 100$, computer = $500.");
    var answer = prompt("Which item do you want to buy?");
    if (answer =="Shirt"){
        money -= 100;
        items.push("Shirt");
        console.log("you bought a Shirt");
    }
 else if (answer == "Computer") {
    money -=400;
    items.push("Computer");
    console.log("You bought a computer")
} else {
console.log("We don't have that")
}
};