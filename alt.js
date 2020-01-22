
// below is GOOD
function getAPI(query){
    console.log('get google places ran')
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.804363,%20-122.271111&radius=500&types=food&name=${query}&input=restaurant&inputtype=textquery&key=AIzaSyDi1ALnuKh-GLEW1YVRuXP3zpYqy0h6lMY`;    console.log(url);
    //console.log("second API key is working")
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
     .then(response => {
         console.log('hi');
            if(response.ok) {
                return response.jason();
            }
            throw new Error(response.statusText);
     })
     .then(responseJson => displayGoogleResults(responseJson))
     .catch(err => {
         $(".js-search-results").text(`Something went wrong alt.js: ${err.message}`);
     });
    };



function displayGoogleResults(responseJson){
console.log(responseJson);
$('.result-list').empty();
let results = responseJson.results;
if (results.length > 0) {
    for (let i=0; i < results.length; i++){
        $('.result-list').append(`<li> ${results[i].name}</li>
        `);
    }
}
else{
    $('result-list').append('<li> Sorry, no results match your search </li>')
}
$('.js-search-results').removeClass('hidden');
}

function watchForm() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        let queryTarget = $(event.currentTarget).find('.js-query');
        let query = queryTarget.val();
        //clear out the input
        queryTarget.val("");
        getAPI(query);
    })
}

$(watchForm);


// function imgClick(query){
//     console.log('img click ran')
// // click event in own function isolation (easier to invoke bc only read when called)\
// // action based so easier to see when ther code is being formed
// $('.js-results').closest("a").click(getGooglePlaces(query));
   
// }

//alter display results to have display the results working

//useful stack overflow
//https://stackoverflow.com/questions/16308357/google-api-for-restaurants-places
//https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

//https://developers.google.com/places/web-service/search#PlaceSearchRequests



