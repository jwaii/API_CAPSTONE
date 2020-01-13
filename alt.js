
// ALREADY IN THE HTML FILE (ADD NEW API KEY) <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// API KEY = "AIzaSyCPSC0sLYxNLyzhRbw98ca6riglSEQ44DQ"


//url to build https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.804363, -122.271111&radius=500&types=food&name=italian&key=AIzaSyDi1ALnuKh-GLEW1YVRuXP3zpYqy0h6lMY

// below is GOOD
function getGooglePlaces(query){
    console.log('get google places ran')
    const url =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.804363, -122.271111&radius=500&types=food&name=${query}&key=AIzaSyDi1ALnuKh-GLEW1YVRuXP3zpYqy0h6lMY`
    console.log(url);
    fetch(url)
.then(response => { 
  if (response.ok){
     return response.json();
     } 
     throw new Error(response.statusText); //or get error 
  })
        .then (responseJson => 
            displayGoogleResults(responseJson))
        .catch(error => alert(`Something went wrong. Please try again`)); 
}


function displayGoogleResults(responseJson){
console.log(responseJson);
}



//alter display results to have display the results working

//useful stack overflow
//https://stackoverflow.com/questions/16308357/google-api-for-restaurants-places
//https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

//https://developers.google.com/places/web-service/search#PlaceSearchRequests



