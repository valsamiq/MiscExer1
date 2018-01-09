app.service('pokeService',['$resource',function($resource){//funció per definir objecte
            
       this.getSaludo=function(){
           return $resource('pokePhp.php/:id',null,{});
       };
    }]);