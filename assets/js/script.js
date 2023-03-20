
// var lat = '40.7146';
// var lon = '-74.3646';
var baseUrl = 'https://api.openweathermap.org/data/2.5/';
var apiKey = '4fd87389f16d5655e71db5a67481b2b3';
var url = baseUrl + '/weather?appid=' + apiKey;

function getLocation() {
    
    navigator.geolocation.getCurrentPosition(function (locationData) {
        console.log(locationData);
        // Make a request to the Open Weather Map API for the current local Weather
        $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function(data) {
            console.log(data);
        });
    });
    
}

getLocation();

function getWeatherByCity() {
    $.get(url + '&q=summit').then(function (data) {
        console.log(data);
    });
}

getWeatherByCity();

// Show the data on the page









// var promise = {
//     then: function() {

//     },
//     catch: function() {

//     }
// };

// function someFunc() {
//     return{
//         // name: 'JD',
//         // age: 43

//         then: function () {

//         },
//         catch: function() {

//         }
//     }
// }