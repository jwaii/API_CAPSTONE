'use strict'

const key ="14618198-0e48f42b11f7addd7d074a05d" // change
const searchURL ="https://pixabay.com/api/" 
console.log('api keys working');
function fetchApi(query){
    
   let url = `${searchURL}?key=${key}&category=food&q=restaurant&q=${query}+food+restaurant`;
  
    console.log(url);
    //fetch, pass through URL for param for API
    fetch(url)
.then(response => { 
  if (response.ok){
     return response.json();
     } 
     throw new Error(response.statusText); //or get error 
  })
        .then (responseJson => 
            displayResults(responseJson,query))
        .catch(error => alert(`Something went wrong. Please try again app.js`)); 
}
      
function displayResults(responseJson,query){
    console.log('display Results is running');
    console.log(responseJson);
    const hits = responseJson.hits;
     console.log(hits);
     $('.js-results').html(" ");
    for  (let i = 0; i < 4; i++){
       $('.js-results').append(`<a href= "#" > <img alt= "submit" class="img" src="${hits[i].largeImageURL}"> </a>`);
        console.log('for loop')
    }
    // imgClick(query);
    // //returnRestaurants(query);
};

// wanting to create an onclick event listener, for when user clicks on of the images. for now just want to console.log('clicked')
function returnRestaurants(query){
    //not sure if things are working (Below)
//   $('.js-results').click(console.log('hi'));
//   console.log('clicked');
    // (ABOVE)

  getAPI(query); // alt.js
};


function watchForm(){
console.log('hello world')
    $('form').submit(event =>{
    event.preventDefault()
    const query = $('#dropdown-list').val();
    console.log(query);
    fetchApi(query);
    console.log('watch form working');
});
}


$(watchForm);
