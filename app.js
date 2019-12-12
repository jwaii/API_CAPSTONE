'use strict'

const Authorization ="563492ad6f91700001000001c12e6064d8854ed3b2a57603660f2ac1"
const searchURL ="https://www.pexels.com/v1"
// promise would wait for first api to get results, then will allow second to build out

console.log('api keys working');

/*
function formatQueryParams(params){
    console.log('format Q params ran')
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        console.log(queryItems) //call for the keys
        return queryItems.join('&');
}
*/

function displayResults(responseJson){
    console.log('display Results is running');
    console.log(responseJson);
    
};

/* const parkList = responseJson.data
    for (let i=0; i< parkList.length; i++){
        console.log(parkList[i])
        $('.ul-results').append(`<li> <a href="${parkList[i].url}" target="_blank">${parkList[i].fullName}</a> <br> ${parkList[i].description}</li>`);
    }*/

function watchForm(){
console.log('hello world')
    $('form').submit(event =>{
    event.preventDefault()
    const query = $('#dropdown-list').val();
    console.log(query);
    console.log('watch form working')
});
}

console.log('Hello from out here')

$(watchForm);