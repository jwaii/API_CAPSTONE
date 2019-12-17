'use strict'

const key ="14618198-0e48f42b11f7addd7d074a05d" // change
const searchURL ="https://pixabay.com/api/" 
console.log('api keys working');
//https://pixabay.com/images/search/food/
function fetchApi(query){ //change api auth points (fill in the URL points)
    
    let url = `${searchURL}?${key}&"p="+encodeURIComponent('chinese food')`;
    //`${searchURL}+${key}&category=food&q=restaurant&q` ;
    console.log(url);
    //fetch, pass through URL for param for API
    fetch(url, {mode: 'no-cors'})
        .then(respose => response.json())
        .then (responseJson => 
            displayResults(responseJson))
        .catch(error => alert(`Something went wrong. Please try again`))
        }
      
  
function displayResults(responseJson){
    console.log('display Results is running');
    console.log(responseJson);
    const query = responseJson.data //??
    for  (let i =0; i < query.length; i++){
        console.log(query[i]);
        console.log('for loop')
    }

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

console.log('Hello from out here')

$(watchForm);
