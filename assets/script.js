//alert("hi");
//Access weather API//

//Find user's selected city in API

$("#search").on("click", function () {
  //alert("working");
  //grabs user input
  var citySearch = $("#city").val();
  //Create heading
  var cityTitle = $("<h3>");
  //add margins
  cityTitle.addClass("my-3");
  //add text - maybe use open weather for this
  cityTitle.text(citySearch);
  //add to current city div
  $("#temp").prepend(cityTitle);

  //Need to find a way to clear previous input in the heading

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    ",us&appid=db250259dcb16cabf6f6fefe0e7b51da";
  //API response
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {});

  //call function for adding searched city as list item in aside
  createSearchHistory();
  //call function for adding info to local storage
});
//function for adding searched city as list item in aside
function createSearchHistory() {
  //grabs user input
  var citySearch = $("#city").val();
  //This creates a button for search history
  var cityHistory = $("<button>");
  //Add list class
  cityHistory.addClass("list-group-item");
  //Add text from user input
  cityHistory.text(citySearch);

  //Append to search bar
  $("#searchHistory").prepend(cityHistory);
}

//Add to local storage
// Create list item to append to search history
//Make link to search history city in weather API to fill #currentCity & #5Day on click

/*In div #currentCity: 
    Create h3 to display:
        city name 
        date 
        current weather icon
    Create <p>'s to display:
        Temp
        Humidity
        Wind Speed
        UV Index*/
/*In div #5Day:
    Create 5 cards:
        class="card" style="width: 8rem;"
        In each card create:
            <h6> for date 
            <i>
            <p> for temp
            <p> for humidity
        for each date respectively*/
