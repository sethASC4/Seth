var HP = 100;
var gold = 0;
var numdefeated = 0;

function updateStats(){
    $("#stats").text("HP: " + HP +" // Gold:" + gold + "Ogres Slain: " + numdefeated );
}
function attack(){
    if(HP>0){
        if(Math.random()*100 > gold){
            $("#ogres").prepen(
                "<p> You Won! + 10 gold.</p>"
            );
        }
    }
}
function setup(){
//Title
$("body").append("<h1>Welcome to Ogre fighter v.1.0</h1>");
//Stats
$("body").append(
    "<div><h3>STATS</h3><p id='stats'></p></div>"
);
//attack
$("body").append(
    "<button onclick='attack()'>Attack the Ogre!</button>"
);
$("body").append(
    "<div id='ogres'></div>"
);
updateStats();
}
$(document).ready(setup);