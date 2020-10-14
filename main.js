var appmodule = angular.module('App1', []);
appmodule.controller('Ctrl1', function($scope) {
    $scope.dataList = [];

    $scope.Add = function() {



        $scope.dataList.push({
            Text1: $scope.txtInput1,
            Text2: $scope.txtInput2,
            checked: false
        });
        $scope.txtInput1 = "";
        $scope.txtInput2 = "";
    };
    $scope.deleteToClick = function(x) {

        $scope.dataList.splice(x, 1);
    }
    $scope.deleteData = function(x) {
        var olddata = $scope.dataList;
        $scope.dataList = [];
        angular.forEach(olddata, function(x) {
            if (!x.checked) $scope.dataList.push(x);
        });
    };

});