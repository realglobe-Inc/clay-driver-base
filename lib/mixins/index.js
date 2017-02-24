/**
 * Mixin functions
 * @module mixins
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get bulkMix () { return d(require('./bulk_mix')) },
  get cursorMix () { return d(require('./cursor_mix')) }
}
