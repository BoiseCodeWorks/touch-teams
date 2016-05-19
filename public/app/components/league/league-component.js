(function(){
    
    angular.module('teams')
        .component('leagueComponent', {
            templateUrl: 'app/components/league/league.html',
            controller: LeagueController
        })
        
        function LeagueController($state){
            var $ctrl = this;
            
            $ctrl.sport = $state.params.sport;
            $ctrl.league = $state.params.league;
            
        }
    
}())