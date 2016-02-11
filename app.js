(function(){
  'use strict';

angular.module('stateAutocomplete', [])
.directive('stateAutocomplete', function() {
  return {
    restrict: 'E',
    scope: {},
    controller: function($scope) {
      var vm = this;

      vm.states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
      
      $scope.$watch(
        function () { 
          return vm.input; 
        }, 
        function (newVal, oldVal) {
          if (newVal === oldVal) {
            vm.filteredStates = vm.states;
          } else {
            vm.filteredStates = vm.states.filter(function (state) {
              state = state.toLowerCase();
              var lowerCaseInput = newVal.toLowerCase();
              return state.indexOf(lowerCaseInput) > -1;
            });
          }
        }
      );
    },
    controllerAs: 'vm',
    templateUrl: 'stateAutocomplete.html',
  }
})

  
})();
