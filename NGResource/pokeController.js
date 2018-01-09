app.controller('pokeController',
        ['$scope', 'pokeService',
function ($scope, pokeService) {  //function = definicion clase controlador
    pokeService.
            getSaludo().get().$promise.then(
            function(resposta){
                //$scope.saludo=resposta;
                //  $scope.edad=resposta.edad;
                $scope.saludo=resposta.players[0].texto;
                $scope.edad=resposta.players[0].edad;
                $scope.players=resposta.players;
            }, //primera, retorna Exit
            function(resposta){}  //segona, fail
    );
    //$scope.saludo="Bon dia!";
    $scope.addNewPoke = function(){
        var info={"texto":"Saludako3","edad":87};
        pokeService.getSaludo().save({id:12},info).$promise.then(
            function(response){},
            function(response){}
                );
    };
 }]);