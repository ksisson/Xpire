
$(document).ready(function() {
    var user_id = parseInt($("#user").attr("userId"));
    $("#submitButton").on("click", function(){
        var food_name = $("#foodItem").val().trim()
        // var user_id = parseInt($("#user").attr("userId"));
        console.log(user_id);
        
        $.get("/api/apis/" + food_name, function(data){
            
            console.log("Data: ");
            console.log(data);
            
           
            //if items is not in the database 
        if(data.length === 0){
           
            $("#results-modal").modal("toggle");    
        }
         else{
            //check will be used if an item with custom value true has already been added to the user 
            var userCheck = false;
            console.log("current user id"+ user_id);
            for( var i = 0; i<data.length;i++){
                console.log(data[i].user_id);
                if(data[i].user_id ===user_id ){
                    console.log("check is changed")
                    userCheck=true;
                }
            }
            if(userCheck===true){
                alert("Item is already on your list!");
            }
            else{
                if(data[0].custom ===false){

                    // var user_id = parseInt($("#user").attr("userId"));
                    
                    var master_record = {
                        loginId : user_id,
                        apiId: data[0].id}
    
                    $.post("/api/mastertable", master_record).then(function(results){
                        console.log(results)
                       
                        location.reload(true);
                        $("#foodItem").val("")
                    }).fail(function(){
                        alert("This product is already on your list!");
                      });
                }
                else{
                $("#results-modal").modal("toggle");
                }
            }
            
            //if a user's entry info was added to the database directly
            

            //if a user has a specific item in their list, prevent from adding 
                           
        }
           
           
          
        });
        
    });

    $("#modalSubmit").on("click", function(){
        var food_name = $("#foodItem").val().trim()
        // var user_id = parseInt($("#user").attr("userId"));
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
                console.log(results);
                location.reload(true);
              
            })
        })
        
    })

});



