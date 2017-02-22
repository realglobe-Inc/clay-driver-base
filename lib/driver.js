/**
 * Abstract driver
 * @abstract
 * @class Driver
 */
'use strict'

const { ifError } = require('assert')
const { bulkMix } = require('./mixins')
const { validateDriver } = require('./validating')

let notImplementedError = () => new Error('Not implemented!')

/** @lends Driver */
class Driver {
  // ---------------------
  // Specs
  // ---------------------
  constructor () {
    const s = this

    ifError(validateDriver(s))
  }

  /**
   * Get single resource from namespace
   * @param {string} namespace - Namespace to work with
   * @param {ClayId} id - Resource id
   * @returns {Promise.<ClayEntity>} Found resource
   */
  one (namespace, id) {
    throw notImplementedError()
  }

  /**
   * List resource in namespace
   * @param {string} namespace - Namespace to work with
   * @param {ListCondition} [condition={}] - List condition query
   * @returns {Promise.<ClayCollection>} Found resource collection
   */
  list (namespace, condition) {
    throw notImplementedError()
  }

  /**
   * Create data with namespace
   * @param {string} namespace - Namepath string
   * @param {Object} attributes - Resource attributes to create
   * @returns {Promise.<ClayEntity>} Created data
   */
  create (namespace, attributes) {
    throw notImplementedError()
  }

  /**
   * Update data with namespace
   * @param {string} namespace - Namepath string
   * @param {ClayId} id - Resource id
   * @param {Object} attributes - Resource attributes to update
   * @returns {Promise.<ClayEntity>} Updated data
   */
  update (namespace, id, attributes) {
    throw notImplementedError()
  }

  /**
   * Delete data with namespace
   * @param {string} namespace - Namepath string
   * @param {ClayId} id - Resource id
   * @returns {Promise.<number>} Destroyed count (0 or 1)
   */
  destroy (namespace, id) {
    throw notImplementedError()
  }

  /**
   * Drop resource with namespace
   * @param {string} namespace - Namepath string
   * @returns {Promise.<boolean>} False if there were nothing to drop
   */
  drop (namespace) {
    throw notImplementedError()
  }
}

module.exports = [
  bulkMix
].reduce((Driver, mixin) => mixin(Driver), Driver)

/**
 * Identifier of clay resource
 * @typedef {Object} ClayId
 * @see https://github.com/realglobe-Inc/clay-id#readme
 */

/**
 * Entity of clay resource
 * @typedef {Object} ClayEntity
 * @see https://github.com/realglobe-Inc/clay-entity#readme
 */

/**
 * Entity collection of clay resource
 * @typedef {Object} ClayCollection
 * @see https://github.com/realglobe-Inc/clay-collection#readme
 */

/**
 * Conditions of list
 * @typedef {Object} ListCondition
 * @property {Object} [filter={}] - Filter condition
 * @property {Object} [page={}] - Page condition
 * @property {number} [page.number=1] - Number of page, start with 1
 * @property {number} [page.size=100] - Number of resources per page
 */
