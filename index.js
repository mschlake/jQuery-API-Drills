'use strict';

function getDogImage() {
  var typeOfDog = $('input').val();
  fetch('https://dog.ceo/api/breed/'+typeOfDog+'/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if(responseJson.status === 'success'){
   $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
  }
  else{
    alert (responseJson.message);
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
