(function () {
	
	var JSData = require('js-data');	
	var DSNedbAdapter = require('js-data-nedb');
	
	var db = new JSData.DS();
	var adapter = new DSNedbAdapter();

	db.registerAdapter('nedb', adapter, { default: true });

    module.exports = db;
	 
})();