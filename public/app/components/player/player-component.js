(function(){
    
    angular.module('teams')
        .component('playerComponent', {
            templateUrl: 'app/components/player/player.html',
            controller: playerController
        })
        
        function playerController($state){
            var $ctrl = this;
            
            $ctrl.sport = $state.params.sport;
            $ctrl.league = $state.params.league;
            $ctrl.team = $state.params.team;
            $ctrl.player = $state.params.player;
            
        }
    
}())