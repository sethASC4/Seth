function setup(){
    createCanvas(600,600);

}

var x =100;

var row1 = [true,true,true,true,true,true,true,true];
var row2 = [true,true,true,true,true,true,true,true];
var row3 = [true,true,true,true,true,true,true,true];
var row4 = [true,true,true,true,true,true,true,true];
var row5 = [true,true,true,true,true,true,true,true];
var board =[row1,row2,row3,row4,row5];

function draw(){
    background(0);
    
    if(counter >=framerate()){
        if (keyIsDown(32)){
            projArray.push(new projectile(x,y,true))
            counter=0
        }
    }
 for(i=0;i<projArray.length;i++){
     rect(projArray[i].x, projArray[i].y,10,10)
     projArray[i].y=6
 }
               
        
    fill(random(255),random(255),random(255),random(255));
    
    for(var i=0; i<8;i++){
        rect(i*75,20,40,40);
        
    }
    for(var i=0;i<8;i++){
        rect(i*75,100,40,40);

    }
    for(var i=0;i<8;i++){
        rect(i*75,180,40,40);
    }
    for(var i=0;i<8;i++){
        rect(i*75,260,40,40);
    }
    for(var i=0;i<8;i++){
        rect(i*75,340,40,40);
    }
    fill(255,0,0);
      if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  rect(x, 490, 20, 55);
     
    
  
}
stroke(0);
for (var i=0; i<board.length; i++){
        for (var j=0; j<board[i].length; j++)
            if(board[i][j]==false);
}

function projectile(x,y,isActive){
    this.x=x;
    this.y=y;
    this.isActive=isActive;
}

var projArray =[];