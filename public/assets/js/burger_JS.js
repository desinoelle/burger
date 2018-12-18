$(function() {
    $(".insert-form").on("submit", function(event) {
      event.preventDefault();

      if ( $("#addBurg").val() != "") {
        var newBurger = {
          burger_name: $("#addBurg").val().trim()
        };
  
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then( function() {
            console.log("Created new burger!");
            // Reload the page
            location.reload();
        });
      }
      else {
        console.log("Give your burger a name first!");
      }
    });

    $(".devour").on("click", function(event) {

    });
});