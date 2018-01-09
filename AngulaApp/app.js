var app=angular.module('myApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('app',{
        url:'/',
        views:{'top':{templateUrl:'top.html',
                controller:'topController'},
            'mid':{templateUrl:'mid.html',
                controller:'midController'},
            'bot':{templateUrl:'bot.html',
                controller:'botController'}
        }
    }).state('app.suscritas',{
        url:'suscritas',
        views:{
            'top@':{templateUrl:'topListaSubs.html'},
            'mid@':{templateUrl:'listaSubs.html'},
            'bot@':{templateUrl:'botListaSubs.html'}
        }
    }).state('app.lists',{
        url:'lists',
        views:{
            'top@':{templateUrl:'topLists.html'},
            'mid@':{templateUrl:'lists.html'},
            'bot@':{templateUrl:'botLists.html'}
        }
    }).state('app.misDatos',{
        url:'misDatos',
        views:{
            'top@':{templateUrl:'topDatos.html'},
            'mid@':{templateUrl:'midDatos.html'},
            'bot@':{templateUrl:'botDatos.html'}
        }
    });
    $urlRouterProvider.otherwise("/");
});