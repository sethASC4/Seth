var catURL = "http://random.cat/meow"

$.ajax({
url:catURL,
success:function(data){

        myFunction(data);
    }  
})

function myFunction(data){
var cat = data.file;
$("body").append("<img src =" + cat + ">");
console.log(data.file);
}

function rand(){
    Math.floor(Math.random()*5);
};

    var guineapigs = ["https://s-media-cache-ak0.pinimg.com/736x/ee/73/0a/ee730ab1a4ce50969ede8ded84818881--cute-guinea-pigs-cute-hamsters.jpg","http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-guineapig.jpg?itok=mjQxh-pK","http://petguineapigcare.com/wp-content/uploads/2009/10/guinea-pig-1.jpg",
    "http://static.boredpanda.com/blog/wp-content/uploads/2014/06/guinea-pig-booboo-lieveheersbeestje-60.jpg","https://fthmb.tqn.com/3DI98nefLdpBGUSMUn3knHPswSg=/2122x1415/filters:no_upscale():fill(transparent,1)/about/GettyImages-117716396-583b47f83df78c6f6af8fb19.jpg"];
var randomgp = guineapigs[Math.floor(Math.random()*5)];
console.log(randomgp);

$.ajax({
url:guineapigs,
success:function(data1){

        myFunction2(data1);
    }  
})

function myFunction2(data1){
var gp = data1.file;
$("body").append("<img src =" + gp + ">");
console.log(data1.file);
}



