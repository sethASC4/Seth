var apiURL = "https://randomuser.me/api"

$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }  
});

function myFunction(data){
    var userPicture = data.results[0].picture.large;
    var firstName = data.results[0].name.first;
    var lastName = data.results[0].name.last;
    var pic = data.results[0].name.title;
    var email = data.results[0].login.username;
    $("body").append("<h2>"+firstName+ " " + lastName+"</h2>");
    $("body").append("<img src =" + userPicture + ">");
    $("body").append("<h2>" + email + "</h2>");
   
    
};