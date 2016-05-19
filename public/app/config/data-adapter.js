(function() {

    angular.module('teams')
        .run(function(DS, DSHttpAdapter) {
            DS.registerAdapter('http', DSHttpAdapter, { default: true });
        })

} ())