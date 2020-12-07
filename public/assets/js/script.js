var searchInput;

// dropdown function
$(function () {
  $(".dropdown-menu").on('click', 'a', function () {
      $("#dropdown").text($(this).text());
      $("#dropdown").val($(this).text());
  });
});


$(function () {
  $("#search-btn").on("click", function (event) {
    var obj = {
      searchInput: "",
      dropDown: ""
  }
    obj.searchInput = $("#cocktailSearch").val();
    event.preventDefault();
    console.log(obj.searchInput);


    $.ajax("/api/find", {
      type: "POST",
      data: obj
    }).then(
      function () {
        console.log("---");
        location.reload();
      }
    );
  });
});

// make cocktail object
// var newCocktail = {
//   likedCocktail: $(cocktailSelect).val().trim(),
//   }


