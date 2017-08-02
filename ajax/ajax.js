var MY_ID ="05a956e8";
var MY_KEY ="dcc5167ebe1fe293bb8d74890ddf5d0d";


var bigMacURL ="https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId="+ MY_ID +"&appKey="+ MY_KEY;

$.ajax({
    url:bigMacURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This"+ name+" has" + cals + "cals! </h2>");
    }
});