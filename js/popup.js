// APP_ID and APP_KEY are defined in my private.js file
// This file is not included in this repo as these are credentials unique to my account
// at https://developer.oxforddictionaries.com/

// Constants
var BASE_URL = 'https://od-api.oxforddictionaries.com/api/v1/';
var ENTRIES_BASE = 'entries/'
var SOURCE_LANG = 'en/';

// Globals
var getMeaning = true;
var getSynonym;
var getAntonym;
var getExample;

function findButtonHandler() {
  var word = document.getElementById('word_input').value; 
  var url;

  // Make API requests based on what user wants
  if (getMeaning) {
    var req = new XMLHttpRequest();
    url = BASE_URL + ENTRIES_BASE + SOURCE_LANG + word + '/definitions';
    req.open("GET", url, true);
    // Set Header
    // req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('app_id', APP_ID);
    req.setRequestHeader('app_key', APP_KEY);

    console.log('in meaning');
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        console.log('hii');
        console.log(req.responseText);
      }
      else{
        console.log('bye');
        console.log(req.readyState);
        console.log(req.status);
      }
    };
    req.send(null);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // setGlobalVariables();

  // Add Event Listeners
  document.getElementById("word_button").addEventListener("click", findButtonHandler);
  // chrome.extension.getBackgroundPage().console.log('foo');
}); 