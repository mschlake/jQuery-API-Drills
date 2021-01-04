'use strict';

function getDogImages() {
  let numberOfDogs = $('input').val();
  fetch('https://dog.ceo/api/breeds/image/random/'+numberOfDogs)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log(error));
}

function displayResults(responseJson) {
$('.results-img').empty();
for(let i=0;i<responseJson.message.length;i++){
  console.log(responseJson.message[i]);
  $('.results-img').append(
    `<img src="${responseJson.message[i]}" class ="sizeImages">`);
}
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
   let numberOfDogs = $('input').val();
    if(numberOfDogs>0 && numberOfDogs<51){
      getDogImages();
    }
    else{
      alert('Please enter a number 1 - 50')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
