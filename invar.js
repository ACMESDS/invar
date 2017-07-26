var 														// Totem modules
	ENUM = require("../enum");
	
var															// shortcuts
	Copy = ENUM.copy,
	Each = ENUM.each;

var INVAR = module.exports = {
	
	// options
	
	// configuration

	config: function (opts) {  // configure the module
	
		if (opts) Copy(opts, INVAR);
		
	},
	
	start: function () {  // run the module
	}
};