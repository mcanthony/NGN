var Base = require('../NGN.Base'),
	eyes = require('eyes');
require('colors');

/**
 * @class NGN.util.Logger
 * A generic logging interface.
 */
var Class = Base.extend({
	
	/**
	 * @constructor
	 * Create a logger.
	 * @params {Object} [config]
	 * @returns {NGN.util.Logger}
	 */
	constructor: function(config){
		
		Class.super.constructor.call(this,config);
		
		Object.defineProperties(this,{
			
			/**
			 * @cfg {Boolean} [exitOnError=false]
			 * Stop the node process/application on error.
			 */
			exitOnError: {
				value:		config.exitOnError || false,
				enumerable:	true,
				writable:	true
			}
			
		});
		
	},
	
	log: function(record) {
		if (typeof record === 'object')
			eyes.inspect(record);
		else
			console.log('INFO: '.yellow.bold+record.yellow);
		this.onLog(record);
	},
	
	info: function(record){
		this.log(record);
	},
	
	error: function(record){
		if (typeof record === 'object')
			eyes.inspect(record);
		else
			console.log('ERROR: '.red.bold+record.red);
		
		this.onError();
	},
	
	warn: function(record){
		if (typeof record === 'object')
			eyes.inspect(record);
		else
			console.log('WARNING: '.magenta.bold+record.magenta);
		this.onWarn(record);
	},
	
	/**
	 * @event log::info
	 * Fired when a record is logged.
	 * @param {Object} record
	 */
	onLog: function(record) {
		this.fireEvent('log::info',record||null);
	},
	
	onInfo: function(record){
		this.onLog(record||null);
	},
	
	/**
	 * @event log::warn
	 * Fired when a warning is logged.
	 * @param {Object} record
	 */
	onWarn: function(record){
		this.fireEvent('log::warn',record||null);
	},
	
	/**
	 * @event log::error
	 * Fired when an error is logged.
 	 * @param {Object} e
	 */
	onError: function(e) {
		this.fireError(e);
		if (this.exitOnError)
			process.exit();
	}
	
});

module.exports = Class;