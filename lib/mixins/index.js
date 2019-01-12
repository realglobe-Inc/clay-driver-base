/**
 * Mixin functions
 * @module mixins
 */

'use strict'


const bulkMix = require('./bulk_mix')
const cursorMix = require('./cursor_mix')

exports.bulkMix = bulkMix
exports.cursorMix = cursorMix

module.exports = {
  bulkMix,
  cursorMix
}
