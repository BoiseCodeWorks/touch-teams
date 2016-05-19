(function(){
    
    angular.module('teams')
        .component('teamComponent', {
            templateUrl: 'app/components/team/team.html',
            controller: TeamController 
        })
        
        function TeamController($state){
            var $ctrl = this;
            
            $ctrl.sport = $state.params.sport;
            $ctrl.league = $state.params.league;
            $ctrl.team = $state.params.team;
            
            
        }
    
}())