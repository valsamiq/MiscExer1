/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('myApp').service(
        'obtenCombinacion',function(){
            
            this.password=[];
            this.getCombinacion=function(){
                return this.password;
            };
            this.getNumeroCombinacion=function(posicio){
                return this.password[posicio];
            };
            
            this.setCombinacion=function(pass){
                this.password=pass;
            };
        });