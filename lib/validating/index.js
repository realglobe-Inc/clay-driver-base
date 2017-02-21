/**
 * Validating modules
 * @module validating
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get validateDriver () { return d(require('./validate_driver')) }
}
