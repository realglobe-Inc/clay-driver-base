/**
 * Mixin functions
 * @module mixins
 */

'use strict'

const d = (module) => module && module.default || module

const bulkMix = d(require('./bulk_mix'))
const cursorMix = d(require('./cursor_mix'))

module.exports = {
  bulkMix,
  cursorMix
}
