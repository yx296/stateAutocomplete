(function(){
  'use strict';

angular.module('stateAutocomplete', [])
.directive('stateAutocomplete', function() {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    controller: function($scope) {
      var vm = this;

      vm.states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
      
      vm.input = '';

      vm.filterStates = function() {
        vm.filteredStates = vm.states.filter(function (state) {
          state = state.toLowerCase();
          var lowerCaseInput = vm.input.toLowerCase();
          return state.indexOf(lowerCaseInput) > -1;
        });
      }
    
      vm.filterStates();
    },
    controllerAs: 'vm',
    templateUrl: 'stateAutocomplete.html',
  }
})

  
})();
