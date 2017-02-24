/**
 * Mixin to cursor support
 * @function cursorMixin
 * @param {function} BaseClass - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const co = require('co')

/** @lends cursorMixin */
function cursorMixin (BaseClass) {
  class IterateMixed extends BaseClass {
    get $$cursorMixed () {
      return true
    }

    /**
     * Create cursor to cursor
     * @param {string} resourceName - Name of resource
     * @param {Object} [options={}] - Optional settings
     * @returns {Object} {Promise.<[Symbol.iterator], function>} Iterable cursor
     */
    cursor (resourceName, options = {}) {
      const s = this
      let { filter = {} } = options
      return co(function * () {
        let fetch = (page) => s.list(resourceName, { filter, page })
        let { meta } = yield fetch({ number: 1, size: 0 })
        let { total } = meta
        if (typeof total === 'undefined') {
          throw new Error('Failed to create cursor')
        }
        return {
          length: total,
          [Symbol.iterator] () {
            let number = 0
            return {
              next () {
                number += 1
                let done = number > total
                let page = { number, size: 1 }
                return {
                  value: !done && (() => fetch(page).then(({ entities }) => entities[ 0 ])),
                  done
                }
              }
            }
          }
        }
      })
    }
  }
  return IterateMixed
}

module.exports = cursorMixin
