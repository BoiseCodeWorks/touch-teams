(function(){
    
    angular.module('teams')
        .component('sportComponent', {
            templateUrl: 'app/components/sport/sport.html',
            controller: SportController
        })
        
        function SportController($state, Models){
            var $ctrl = this;
            
            Models.Sport.findAll({where: {name: $state.params.sport}}).then(function(sport){
              $ctrl.sport = sport[0];
              Models.League.findAll({where:{ sportId: sport.id}}).then(function(leagues){
                  $ctrl.leagues = leagues
              })  
            })
            
            $ctrl.addLeague = function(league){
                league.sportId = $ctrl.sport.id;
                Models.League.create(league)
                $ctrl.newLeague = {}
            }
                        
        }
    
}())