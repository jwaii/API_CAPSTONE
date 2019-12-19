'use strict'

const key ="14618198-0e48f42b11f7addd7d074a05d" // change
const searchURL ="https://pixabay.com/api/" 
console.log('api keys working');
function fetchApi(query){
    
   let url = `${searchURL}?key=${key}&category=food&q=restaurant&q=${query}+food+restaurant`;
  
    console.log(url);
    //fetch, pass through URL for param for API
    fetch(url)
//, {mode: 'no-cors'}
//check if the response is ok 
 //return response as json
.then(response => { 
  if (response.ok){
     return response.json();
     } 
     throw new Error(response.statusText); //or get error 
  })
        .then (responseJson => 
            displayResults(responseJson))
        .catch(error => alert(`Something went wrong. Please try again`));
}
      
  
function displayResults(responseJson){
    console.log('display Results is running');
    console.log(responseJson);
    const hits = responseJson.hits;
     console.log(hits);
     $('.js-results').html(" ");
    for  (let i =0; i < hits.length; i++){
       $('.js-results').append(`<input type="image" alt= "submit" class="img" src="${hits[i].largeImageURL}">`);
        console.log('for loop')
    }
};

//wanting to create an onclick event listener, for when user clicks on of the images. for now just want to console.log('clicked')
function returnRestaurants(){
  $('.js-results'.click());
  console.log('clicked')
};

function watchForm(){
console.log('hello world')
    $('form').submit(event =>{
    event.preventDefault()
    const query = $('#dropdown-list').val();
    console.log(query);
    fetchApi(query);
    console.log('watch form working')
});
}

console.log('Hello from over here')

$(watchForm);

// Clicking image returns local restauraunts
// need to ask for the zip code/ current location
// map out close by areas 
// display restaurants
// 
// 
// 
// 
