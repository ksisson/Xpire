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

// Add button click listner

    // Capture input from add button text box(food item)

    // Make a get request to query the api table for the food item

    // If the food item is in the api table, return the shelflife

    // If the food item is not in the api table, prompt user for shelf life and make a post request to the table using custom: true

// Delete button click listener

    // Make a delete request to the mastertable based on both user id and food id 
    