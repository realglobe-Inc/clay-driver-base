/**
 * Mixin functions
 * @module mixins
 */

'use strict'

const _d = (module) => module && module.default || module

const bulkMix = _d(require('./bulk_mix'))
const cursorMix = _d(require('./cursor_mix'))

module.exports = {
  bulkMix,
  cursorMix
}
