'use strict'

let Base = require('../Server')
let axon = require('axon')
let rpc = require('ngn-axon-rpc')
let rep = axon.socket('rep')
let _server = null

/**
 * @class NGN.rpc.Server
 * The RPC server is a special TCP socket server that exposes
 * API functions to other processes. This class encapsulates application
 * logic in a manner that can be reused by both local and remote NGN processes.
 * For example, a REST interface and an XMPP chat interface can both use the same
 * underlying logic by making remote procedure calls to the same server.
 *
 * **Example: Hard-coded Object**
 * ```js
 * var controller = new NGN.rpc.Server({
 *   port: 4000,
 *   expose: {
 *     sayHello: function(name){
 *       return "Hello, "+name
 *     },
 *     sayGoodbye: function(name){
 *       return "Goodbye "+name
 *     }
 *   }
 * })
 * ```
 *
 * **Example: Module**
 * ```js
 * var controller = new NGN.rpc.Server({
 *   port: 4000,
 *   module: require('./path/to/module.js')
 * })
 * ```
 * @docauthor Corey Butler
 * @extends NGN.Server
 */

class Server extends Base {
  constructor (config) {
    config = config || {}

    /**
     * @cfg port (required)
     * @inheritdoc
     */

    /**
     * @cfg {Object} module
     * This can be a filepath or an Object. It contains the functions
     * that make up the API.
     *
     * **Example: Hard-coded Object**
     * ```js
     * var controller = new NGN.rpc.Server({
     *   port: 4000,
     *   expose: {
     *     sayHello: function(name){
     *       return "Hello, "+name
     *     },
     *     sayGoodbye: function(name){
     *       return "Goodbye "+name
     *     }
     *   }
     * })
     * ```
     *
     * **Example: Module**
     * ```js
     * var controller = new NGN.rpc.Server({
     *   port: 4000,
     *   module: require('./path/to/module.js')
     * })
     * ```
     */
    super(config)

    this.module = config.expose || {}
  }

  /**
   * @property {Object} server
   * The RPC server.
   * @private
   * @readonly
   */
  get server () {
    return _server || null
  }

  /**
   * @method expose
   * Expose a custom module (require) or an object, just like #module.
   * @param {Object} module (required)
   */
  expose (module) {
    if (!module) {
      return console.warn('Invalid module specified in expose() method. Skipping.')
    }
    if (!this.running) {
      this.on('start', function () {
        console.info('Exposing module (delayed).')
        _server.expose(module)
      })
      return console.warn('Cannot expose module until the server is started.')
    }
    _server.expose(module)
  }

  /**
   * @method start
   * Start listening for requests.
   */
  start () {
    if (!this.running && !this.starting) {
      try {
        let me = this

        this._starting = true

        // Bind to a port (i.e. listen for TCP requests)
        rep.bind(this.port, function () {
          // Create the logical server
          _server = new rpc.Server(rep)

          // Handle a shutdown of the connection.
          _server.sock.once('close', function () {
            me._running = false
            me._starting = false
            me.emit('stop', this)
          })

          // Expose functionality
          me.module && _server.expose(me.module)

          // Cleanup & emit a notification that the server has started.
          me._running = true
          me._starting = false
          me.emit && me.emit('start')
        })
      } catch (e) {
        this._running = false
        this._starting = false
        this.emit('error', e)
      }
    } else {
      console.warn('Server already started. Cannot start twice. Make sure autoStart=true and start() are not being executed sequentially.')
    }
  }

  /**
   * @method stop
   * Stop the server.
   */
  stop () {
    this.server.sock && this.server.sock.close()
  }

}

// Create a module out of this.
module.exports = Server
