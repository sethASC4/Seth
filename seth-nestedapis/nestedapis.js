
var randomurl="https://randomuser.me/api"
var countryapi="https://restcountries.eu/rest/v2/alpha?codes="

$.ajax({
       url:randomurl,
    success:function(data){
        myFunction(data);
    }  
})

function myFunction(data){
    var userPicture = data.results[0].picture.large;
    var gender = data.results[0].gender;
    var firstName=data.results[0].name.first;
    var lastName =data.results[0].name.last;
    var pic = data.results[0].picture.large;
    var country =(data.results[0].nat);
    $("body").append("<h2>"+firstName+ " " + lastName+"</h2>");
    $("body").append("<h2>" + gender + "</h2>");
    $("body").append("<img src =" + userPicture + ">");
    
    
    $.ajax({
        url:countryapi + country,
        success:function(data){
            myFunction2(data);
}
})
}
    function myFunction2(data){
       var nat= (data[0].name);
        console.log(data[0].name)
       $("body").append("<h2> they are from " + nat +"</h2>" ); 
    }


    
