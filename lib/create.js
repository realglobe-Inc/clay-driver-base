/**
 * Create driver instance
 * @function create
 * @param {...*} args
 * @returns {Driver}
 */
'use strict'

const Driver = require('./driver')

/** @lends create */
function create (args) {
  return new Driver(...args)
}

module.exports = create
