/**
 * @author GaungHui
 * @description description
 */

module.exports = require('util').promisify(require('consolidate').ejs.render)
