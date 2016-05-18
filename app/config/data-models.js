(function(){
    
    angular.module('teams')
        .service('Models', function(DS){
            var ms = this;
            
            ms.Sport = DS.defineResource({
                name: 'sport',
                endpoint: 'sports',
                relationships: {
                    hasMany: {
                        leagues: {
                            localField: 'leagues',
                            foreignKey: 'leagueId'
                        }
                    }
                }
            })
            // var baseball = {
            //     leagues:{
            //         123: '123'
            //     }
            // }
            // var mlb = {
            //     id: '123',
            //     sport: 'sdxbherhy45674r5y6u',
            //     teams: {'456t7y8ui9o0fgyh': '456t7y8ui9o0fgyh'}
            // }
            
            ms.League = DS.defineResource({
                name: 'league',
                endpoint: 'leagues',
                relationships: {
                    belongsTo: {
                        sport: {
                            localField: 'sport',
                            foreignKey: 'sportId'
                        }
                    },
                    // hasMany: {
                    //     teams: {
                    //         localField: 'teams',
                    //         foreignKey: 'teamId'
                    //     }
                    // }
                }
            })
            
            
            
        })
    
}())