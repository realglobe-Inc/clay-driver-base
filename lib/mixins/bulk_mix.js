/**
 * Mixin to bulk support
 * @function bulkMixin
 * @param {function} BaseClass - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const co = require('co')

/** @lends bulkMixin */
function bulkMixin (BaseClass) {
  class BulkMixed extends BaseClass {
    get $$bulkMixed () {
      return true
    }

    /**
     * Create multiple resources
     * @param {string} namespace - Namepath string
     * @param {Object[]} attributesArray - List of attributes
     * @returns {Promise.<ClayEntity[]>} Created resources
     */
    createBulk (namespace, attributesArray) {
      const s = this
      return co(function * () {
        let created = []
        for (let attributes of attributesArray) {
          created.push(
            yield Promise.resolve(s.create(namespace, attributes))
          )
        }
        return created
      })
    }

    /**
     * Update multiple resources
     * @param {string} namespace - Namepath string
     * @param {Object.<ClayId, Object>} attributesHash - Hash of attributes
     * @returns {Promise.<Object.<ClayId, ClayEntity>>} Updated resources
     */
    updateBulk (namespace, attributesHash) {
      const s = this
      return co(function * () {
        let updated = []
        for (let id of Object.keys(attributesHash)) {
          let attributes = attributesHash[ id ]
          updated[ id ] = yield Promise.resolve(s.update(namespace, id, attributes))
        }
        return updated
      })
    }

    /**
     * Update multiple resources
     * @param {string} namespace - Namepath string
     * @param {ClayId[]} ids - Ids to destroy
     * @returns {Promise.<number>} Destroyed counts
     */
    destroyBulk (namespace, ids) {
      const s = this
      return co(function * () {
        let count = 0
        for (let id of ids) {
          count += yield Promise.resolve(s.destroy(namespace, id))
        }
        return count
      })
    }

  }
  return BulkMixed
}

module.exports = bulkMixin