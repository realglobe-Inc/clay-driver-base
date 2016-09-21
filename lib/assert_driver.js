/**
 * Assert driver instance
 * @function assertDriver
 * @param {Driver} driver
 */
'use strict'

const { LogPrefixes, DriverSpec } = require('clay-constants')

const { DRIVER_PREFIX } = LogPrefixes
const { REQUIRED_METHODS } = DriverSpec

/** @lends assertDriver */
function assertDriver (driver) {
  for (let methodName of REQUIRED_METHODS.split(',')) {
    let missing = !driver[ methodName ]
    if (missing) {
      throw new Error(`${DRIVER_PREFIX} Required method is missing: ${methodName}`)
    }
  }
}

module.exports = assertDriver
