function setup(){
    createCanvas(600,600);
    background(50,50,255);
//   for(i=0;i<=600;i+=75){
//       line(i,0,i,600);
//   }
//   for(i=0;i<=600;i+=75){
//       line(0,i,600,i);
//   }
}



function mouseClicked(){
}

var row1 = ["su","nu","nu","nu","nu","nu","nu","nu"];
var row2 = ["su","nu","nu","nu","nu","nu","nu","nu"];
var row3 = ["su","nu","su","nu","nu","nu","nu","su"];
var row4 = ["su","nu","su","nu","nu","nu","nu","nu"];
var row5 = ["nu","nu","su","nu","nu","nu","nu","nu"];
var row5 = ["nu","nu","su","nu","nu","nu","nu","nu"];
var row6 = ["nu","nu","su","nu","nu","nu","nu","nu"];
var row7 = ["nu","nu","nu","nu","su","nu","nu","nu"];
var row8 = ["nu","nu","nu","nu","su","nu","nu","nu"];
var board =[row1,row2,row3,row4,row5,row6,row7,row8];
function draw(){
    stroke(0);
    var score =0;
    for (var i=0; i<board.length; i++){
        for (var j=0; j<board[i].length; j++){
            if(board[i][j]=="nu" ||board[i][j]=="su"){
                fill(200);
            }
            else if (board[i][j]=="nc"){
                fill(0);
            }
            else if (board[i][j]=="sc"){
                fill(255,0,0);
                score++;
            }
            rect(j*75,i*75,75,75);
        }
    }
    
}
fill(100);
noStroke();
rect(190,401,100,100);
fill(0);