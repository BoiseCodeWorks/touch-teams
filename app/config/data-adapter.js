(function() {

    angular.module('teams')
        .config(function(DSFirebaseAdapterProvider) {
            DSFirebaseAdapterProvider.defaults.basePath = 'https://sandboxjs.firebaseio.com/db/';
        })
        .run(function(DS, DSFirebaseAdapter) {
            // the firebase adapter was already registered
            DS.adapters.firebase === DSFirebaseAdapter;

            // but we want to make it the default
            DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });
        })

} ())