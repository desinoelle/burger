$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newState = {
        devoured: true
      };
  
      // PUT request (updateOne).
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("devoured is now ", newState.devoured);
          // Reload the page
          location.reload();
        }
      );
    });
  
    $(".insert-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#addBurg").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page
          location.reload();
        }
      );
    });
});