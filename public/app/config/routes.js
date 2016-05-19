(function() {
'use strict';

    angular
        .module('teams')
        .config(function($stateProvider){
            
            $stateProvider  
                .state('sports', {
                    url: '',
                    template: '<sports-component></sports`-component>'
                })
                .state('sport', {
                    url: '/:sport',
                    template: '<sport-component></sport-component>'
                })
                .state('league', {
                    url: '/:sport/:league',
                    template: '<league-component></league-component>'
                })
                .state('team', {
                    url: '/:sport/:league/:team',
                    template: '<team-component></team-component>'
                })
                .state('player', {
                    url: '/:sport/:league/:team/:player',
                    template: '<player-component></player-component>'
                })
        })
        
}());