
'use strict'

/**
 * Mixin to bulk support
 * @function bulkMixin
 * @param {function} BaseClass - Class to mix
 * @returns {function} Mixed class
 */
function bulkMixin (BaseClass) {
  class BulkMixed extends BaseClass {
    get $$bulkMixed () {
      return true
    }

    /**
     * One as bulk
     * @param {string} resourceName - Name of resource
     * @param {ClayId[]} ids - Resource ids
     * @param {Object} [options={}] - Options settings
     * @returns {Promise.<Object.<ClayId, ClayEntity>>} Found resources
     */
    async oneBulk (resourceName, ids, options = {}) {
      const found = {}
      for (const id of ids) {
        found[String(id)] = await this.one(resourceName, id, options)
      }
      return found
    }

    /**
     * List with multiple conditions
     * @param {string} resourceName - Name of resource
     * @param {ListCondition[]} conditionArray
     * @param {Object} [options={}] - Options settings
     * @returns {Promise.<ClayCollection[]>} Found resource collections
     */
    async listBulk (resourceName, conditionArray, options = {}) {
      let found = []
      for (const condition of conditionArray) {
        found = [
          ...found,
          await this.list(resourceName, condition, options)
        ]
      }
      return found
    }

    /**
     * Create multiple resources
     * @param {string} resourceName - Name of resource
     * @param {Object[]} attributesArray - List of attributes
     * @param {Object} [options={}] - Optional settings
     * @returns {Promise.<ClayEntity[]>} Created resources
     */
    async createBulk (resourceName, attributesArray, options = {}) {
      const created = []
      for (const attributes of attributesArray) {
        created.push(
          await Promise.resolve(this.create(resourceName, attributes))
        )
      }
      return created
    }

    /**
     * Update multiple resources
     * @param {string} resourceName - Name of resource
     * @param {Object.<ClayId, Object>} attributesHash - Hash of attributes
     * @param {Object} [options={}] - Optional settings
     * @returns {Promise.<Object.<ClayId, ClayEntity>>} Updated resources
     */
    async updateBulk (resourceName, attributesHash, options = {}) {
      const updated = []
      for (const id of Object.keys(attributesHash)) {
        const attributes = attributesHash[id]
        updated[id] = await Promise.resolve(this.update(resourceName, id, attributes))
      }
      return updated
    }

    /**
     * Update multiple resources
     * @param {string} resourceName - Name of resource
     * @param {ClayId[]} ids - Ids to destroy
     * @param {Object} [options={}] - Optional settings
     * @returns {Promise.<number[]>} Destroyed counts
     */
    async destroyBulk (resourceName, ids, options = {}) {
      const counts = []
      for (const id of ids) {
        counts.push(
          await Promise.resolve(this.destroy(resourceName, id))
        )
      }
      return counts
    }
  }

  return BulkMixed
}

module.exports = bulkMixin
