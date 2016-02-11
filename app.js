(function(){
  'use strict';
  //avoid polluting global scope with IIFE, controller has access to stateAutoCompleteCtrl, but stateAutoCompleteCtrl
  // is still hidden from window

  //named function passed into Ctrl instead of anonymous function directly in Ctrl makes it easier to trace errors  

var stateAutocompleteCtrl = function() {
  this.states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
};


angular.module('stateAutocomplete', [])
  .controller('stateAutocompleteCtrl', [
    stateAutocompleteCtrl
  ]); 

})();
