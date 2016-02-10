(function(){
  'use strict';

angular.module('stateAutocomplete', [])
.directive('stateAutocomplete', function() {
  return {
    restrict: 'E',
    templateUrl: 'stateAutocomplete.html',
    controllerAs: 'vm',
    controller: function() {
      this.states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    }
  }
})

// .controller('stateAutocompleteCtrl', [
//   '$scope', //array annotation provides for minification safe code
//   stateAutocompleteCtrl
//   ]) 



// var stateAutocompleteCtrl = function($scope) {
//   var vm = this;
  
//   var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
//   $scope.$watch(
//     function () { 
//       return vm.input; 
//     }, 
//     function (newVal, oldVal) {
//       if (newVal === oldVal) {
//         vm.filteredStates = states;
//       } else {
//         vm.filteredStates = states.filter(function (state) {
//           state = state.toLowerCase();
//           var lowerCaseInput = newVal.toLowerCase();
//           return state.indexOf(lowerCaseInput) > -1;
//         });
//       }
//     }
//   );
// };






})();
