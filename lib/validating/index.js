/**
 * Validating modules
 * @module validating
 */

'use strict'

const _d = (module) => module && module.default || module

const validateDriver = _d(require('./validate_driver'))

module.exports = {
  validateDriver
}
