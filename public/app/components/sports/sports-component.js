(function(){
    
    angular.module('teams')
        .component('sportsComponent', {
            templateUrl: 'app/components/sports/sports.html',
            controller: SportsController
        })
        
        function SportsController(Models){
            var $ctrl = this;
            
            Models.Sport.findAll().then(function(sports){
                $ctrl.sports = sports
            })
            
            
            $ctrl.addSport = function(sport){
                Models.Sport.create(sport)
                $ctrl.newSport = {}
            }
            
            
        }
    
}())