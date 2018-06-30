$(document).ready(function() {


  var updating = false;



  //obtaining fields once login is clicked, will be used for
  $("#login").on("click", function () {
    var userInput = $("#username").val().trim();
    var passwordInput = $("#password").val().trim();
    event.preventDefault();
    // Wont submit the post if we are missing a body or a username
    if (!userInput || !passwordInput) { 
      return;
    }
    // Constructing a newUser object to hand to the database
    var newUser = {
      username: userInput,
      password: passwordInput
    };
    console.log(newUser);
 
    createUser(newUser);
    
  });



 
  
  // Adding an event listener for when the form is submitted
  $("#submit").on("click", function () {
    var userInput = $("#username").val().trim();
    var passwordInput = $("#password").val().trim();
    event.preventDefault();
    // Wont submit the post if we are missing a body or a username
    if (!userInput || !passwordInput) {
      return;
    }
    // Constructing a newUser object to hand to the database
    var newUser = {
      username: userInput,
      password: passwordInput
      
    };

    console.log(newUser);

    // If we're updating a post run updatePost to update a post
    // Otherwise run createPost to create a whole new post
    if (updating) {
      newUser.id = postId;
      updatePost(newUser);
    }
    else {
      verifyUser(newUser);
    }
  });

  function getId(user){
    $.get("/user/" + user.username, function(data){
      console.log("ghgjghgjh");
      // console.log(data.id);
      localStorage.setItem("userid", data.id);
    })
  }
  // Submits a new post and brings user to blog page upon completion
  function createUser(User) {
    $.post("/create", User, function(User) {
        console.log("Creating Account!");
        // getId(User);
        location.reload(true);
    }).fail(function(){
      alert("Username already exists!");
    });
  }//end of function


  function verifyUser(User){
    $.post("/login", User, function(User){
      console.log("Veirfying data");
      // getId(User);
      location.reload(true);
    }).fail(function(){
      alert("Could not authenticate. Check your username and password to see if they're correct");
    });
  }//end of verify user



  
});
