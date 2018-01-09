angular.module('myApp',[])
        .controller('controller',['$scope','obtenCombinacion',
    function($scope,obtenCombinacion){
            $scope.op1="1";
            $scope.op2="2";
            $scope.op3="3";
            $scope.crearCombi=true;
            $scope.validarCombi=false;
            // La guardo a Service $scope.password=[]; //Guardem la combinacio creada.
            
            $scope.clicOp= function(num){
                if(num===1){
                    $scope.op1+=1;
                    if($scope.op1>4){
                        $scope.op1=1;
                    }
                }
                if(num===2){
                    $scope.op2+=1;
                    if($scope.op2>4){
                        $scope.op2=1;
                    }
                }
                if(num===3){
                    $scope.op3+=1;
                    if($scope.op3>4){
                        $scope.op3=1;
                    }
                }
            };
            $scope.aceptaCombi=function(){
                $scope.crearCombi=false;
                $scope.validarCombi=true;
                //$scope.password=[$scope.op1, $scope.op2, $scope.op3];
                obtenCombinacion.setCombinacion();
                $scope.op1=0; $scope.op2=0; $scope.op3=0;
            };
            $scope.combis=[];
            $scope.combis[0]=[[1,'diferent'],[2,'diferent'],[3,'diferent']];
            /*$scope.combis[1]=[1,1,4];*/
            $scope.validaCombi=function(){
                var op1OK="diferent", op2OK="diferent", op3OK="diferent";
                
                /*if($scope.op1===obtenCombinacion.getNumeroCombinacion(0)){
                    op1OK="igual";
                }
                 Alternativa a la otro usando ServiceMastermind.
                 **/
                
                if($scope.op1===$scope.password[0]){
                    op1OK="igual";
                }
                if($scope.op2===$scope.password[1]){
                    op2OK="igual";
                }
                if($scope.op3===$scope.password[2]){
                    op3OK="igual";
                }
                var com = [[$scope.op1,op1OK],[$scope.op2,op2OK],[$scope.op3,op3OK]];
                $scope.combis.push(com);
            };
        } ]);