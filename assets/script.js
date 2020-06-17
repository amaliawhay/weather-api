//alert("hi");
//Access weather API//

//Find user's selected city in API
//var for open weather url
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=db250259dcb16cabf6f6fefe0e7b51da";

//var for user input
var city = $("#city").val();
console.log(city);

//API response
// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   //$("#currentCity").text(JSON.stringify(response));
//   console.log(response);
// });

// $("#search").on("click", function () {
//   //alert("working");

//   //call function for adding entered city info to current city div

//   //call function for adding searched city as list item in aside
//   createSearchHistory();
//   //call function for adding infor to local storage
// });
// function createSearchHistory() {
//   //This will grab the user's city of choice
//   var citySearch = $("#city").val();
//   //This creates a button for search history
//   var cityHistory = $("<button>");
//   //Add list class
//   cityHistory.addClass("list-group-item");
//   //Add text from user input
//   cityHistory.text(citySearch);

//   //Append to search bar
//   $("#searchHistory").append(cityHistory);
// }

//Function for adding city input to current city div

//function for adding searched city as list item in aside
//add to local storage
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
