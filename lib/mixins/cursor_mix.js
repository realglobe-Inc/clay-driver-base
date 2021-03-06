/**
 * Mixin to cursor support
 * @function cursorMixin
 * @param {function} BaseClass - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

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
     * @param {Object} [options.filter={}] - Filter
     * @param {Object} [options.sort=[]] - Sort
     * @param {string|[]} [options.skipResolvingRefFor] - Attributes to skip resolving refs
     * @returns {Object} {Promise.<[Symbol.iterator], function>} Iterable cursor
     */
    async cursor (resourceName, options = {}) {
      const {
        filter = {},
        sort = [],
        parser = v => v,
        skipResolvingRefFor = [],
      } = options
      const fetch = (page) => this.list(
        resourceName,
        {filter, sort, page},
        {skipResolvingRefFor,},
      )
      const {meta} = await fetch({number: 1, size: 0})
      const {total} = meta
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
              const done = number > total
              const page = {number, size: 1}
              return {
                value: !done && (() => fetch(page).then(({entities}) => parser(entities)).then((parsed) => parsed[0])),
                done
              }
            }
          }
        }
      }
    }
  }

  return IterateMixed
}

module.exports = cursorMixin
