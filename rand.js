
function dice(){
console.log(Math.floor(Math.random()*6));
}


function dnd(){
console.log(Math.floor(Math.random()*20));
}

function rand(upperBd){
return (Math.floor(Math.random()*upperBd));
}


var lunches = ["chinese", "caribbean","mexican"]

var lunch_today = lunches[rand(3)];

console.log(lunch_today);
