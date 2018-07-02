// $(".text-right").on("click", "#submitButton",function(){
//     console.log("hello");
//     $("#results-modal").modal("toggle");
// })


$(document).ready(function() {
    $("#submitButton").on("click", function(){
        var food_name = $("#foodItem").val().trim()
        var user_id = parseInt($("#user").attr("userId"));
        console.log(user_id);
        
        $.get("/api/apis/" + food_name, function(data){
            console.log(data)
            if(data === null){
                $("#results-modal").modal("toggle");
                
            }
            else{
                
                var master_record = {
                    loginId : user_id,
                    apiId: data.id}

                $.post("/api/mastertable", master_record).then(function(results){
                    console.log(results)
                    printFoods(user_id)
                    $("#foodItem").val("")
                })
            }
        });
        
    });

    $("#modalSubmit").on("click", function(){
        var food_name = $("#foodItem").val().trim()
        var user_id = parseInt($("#user").attr("userId"));
        var shelflife = parseInt($("#shelflife").val().trim())
        var category = $("#category").val()
        

        var api_addition = {
            item_name: food_name,
            shelf_life: shelflife,
            category: category,
            custom: true,
            user_id: user_id}
            

        $.post("/api/apis", api_addition, function(data){
            console.log(data)
            var master_record = {
                loginId: user_id,
                apiId: data.id}

            $.post("/api/mastertable", master_record).then(function(results){
                console.log(results)
                printFoods(user_id)
            })
        })
        $("#foodItem").val("")
    })

});

function printFoods(user_id){
    $.get("/foodlist/" + user_id, function(data){
        console.log(data)
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

