(function(){
    
    angular.module('teams')
        .service('Models', function(DS){
            var ms = this;
            
            ms.Sport = DS.defineResource({
                name: 'sport',
                endpoint: 'sports',
                relationships: {
                    hasMany: {
                        league: {
                            localField: 'leagues',
                            foreignKey: 'sportId'
                        }
                    },
                    enumerable: true
                }
            })
            
            ms.League = DS.defineResource({
                name: 'league',
                endpoint: 'leagues',  
                relationships: {
                    belongsTo: {
                        sport: {
                            localField: 'sport',
                            localKey: 'sportId'
                        }
                    }
                }
            })
            
            
            
        })
    
}())