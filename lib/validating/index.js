/**
 * Validating modules
 * @module validating
 */

'use strict'

const d = (module) => module && module.default || module

const validateDriver = d(require('./validate_driver'))

module.exports = {
  validateDriver
}
