(function () {

	var router = require('express').Router();
    var Sport = require('../db/models/sport');
    var League = require('../db/models/league');
    

    router.route('/sports/:id?')
        .get(Sport.getSports)
        .post(Sport.addSport)
        
    router.route('/leagues/:id?')
        .get(League.getLeagues)
        .post(League.addLeague)
    /**
     * Your Code Here
     */
    
	//Make sure you export the router component
	exports.router = router;
	
})();