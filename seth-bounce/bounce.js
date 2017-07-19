function setup(){
    createCanvas(500,500);
   xspeed = random(-2,2);
   yspeed = random(-2,2);
    
}
var x =250
var y =250;
var xspeed 
var yspeed
function draw(){
     background(200);
     fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,30,30);
    if (x>=500){
        xspeed = -1;

    }
    else if(x<=0){
        xspeed = +1
    }
    if (y>=500){
        yspeed = -1;
        
    }
    else if(y<=0){
        yspeed = +1;
    }
    x = x+xspeed;
    y = y+yspeed;
}