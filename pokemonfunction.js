var alphabet 

function rand(upperBd){
return (Math.floor(Math.random()*upperBd));
}
 
 function randletter(){
     var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]    
return (alphabet[rand(26)])
 }

var myArray = ["a","b","c"];

function randWord(){

    for (var i= 0; i<rand(26); i++){
        var rand2 = "";
        for (i=0; i<rand(26); i++){
            myArray.push(randletter());
        }
        var ran2 = rand2 + randletter();
        return (myArray);
    }
    

};
console.log(randWord());

