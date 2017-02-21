/**
 * Mixin functions
 * @module mixins
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get bulkMix () { return d(require('./bulk_mix')) }
}
