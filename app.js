angular.module('editableItem', [])
  .directive('makeEditable', [function () {
    return {
      restrict: 'A',
      scope: true,
      templateUrl: 'wrapElement.html',
      transclude: true,
      link: function ($scope, $element, $attrs) {
        $scope.editMode = false;

        $scope.edit = function(){
          $scope.editMode = true;
        }

        $scope.save = function(){
          $scope.editMode = false;
        }
      }
    }
  }]);