function setup(){
    createCanvas(500,500);
   
    
}
var x =0;
var y =0;
function draw(){
     background(200);
     fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,30,30);
    x++;
    y++;
    if(x >= 500){
        x--;
        y--;
    }
}