// $(".text-right").on("click", "#submitButton",function(){
//     console.log("hello");
//     $("#results-modal").modal("toggle");
// })


$(document).ready(function() {
    $("#submitButton").on("click", function(){
        var food_name = $("#foodItem").val().trim()
        var user_id = sessionStorage.getItem("user_id")
        
        $.get("/api/apis/" + food_name, function(data){
            if(data.length === 0){
                $("#modal").show();
                $("#modalSubmit").on("click", function(){
                    var shelflife = parseInt($("#shelflife").val().trim())
                    var category = $("#category").val()

                    var api_addition = {
                        item_name: food_name,
                        shelflife: shelflife,
                        category: category,
                        custom: true,
                        user_id: user_id}

                    $.post("/api/apis", api_addition, function(data){
                        var master_record = {
                            loginId: user_id,
                            apiId: data[0].apiId}

                        $.post("/api/mastertable", master_record).then(#)
                    })
                })
            }
            else{
                var master_record = {
                    loginId : user_id,
                    apiId: data.apiId}

                $.post("/api/mastertable", master_record).then(#)
            }
        });
    });


});

function printFoods(){
    $.get("/foodlist/" + user_id, function(data){

    })
}

Date.prototype.addDays = function(days){
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getexpiration(datestamp,shelflife){
    var expiration = datestamp.addDays(shelflife);
    return expiration
}

function getshelflife(expiration){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();
    var secondDate = expiration

    var diffDays = Math.ceil(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}

