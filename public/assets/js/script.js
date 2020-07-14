var burgerName = $("#newburger");
var submitBurgerBtn = $("#addburger");
var devouredBurgerbtn = $(".eatburger");

//listener funtcion to take care of the user input
submitBurgerBtn.click(function (event) {
  event.preventDefault();

  var newBurger = {
    burger_name: burgerName.val().trim(),
    devoured: 0,
  };

  console.log(newBurger);

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});

devouredBurgerbtn.on("click", function (event) {
  event.preventDefault();

  var id = $(this).data("id");
  var devouredState = {
    devoured: 1,
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState,
  }).then(function () {
    console.log("Burger devoured");
    location.reload();
    // Reload the page to get the updated list
    location.reload();
  });
});
