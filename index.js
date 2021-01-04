'use strict';

function getDogImages() {
  let numberOfDogs = $('input').val();
  fetch('https://dog.ceo/api/breeds/image/random/'+numberOfDogs)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchForm(numberOfDogs) {
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
