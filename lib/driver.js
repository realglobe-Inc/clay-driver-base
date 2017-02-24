/**
 * Abstract driver
 * @abstract
 * @class Driver
 */
'use strict'

const { ifError } = require('assert')
const { bulkMix, cursorMix } = require('./mixins')
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
   * Get single entity from resource
   * @param {string} resourceName - Name of resource
   * @param {ClayId} id - Resource id
   * @returns {Promise.<ClayEntity>} Found resource
   */
  one (resourceName, id) {
    throw notImplementedError()
  }

  /**
   * List entities from resource
   * @param {string} resourceName - Name of resource
   * @param {ListCondition} [condition={}] - List condition query
   * @returns {Promise.<ClayCollection>} Found resource collection
   */
  list (resourceName, condition) {
    throw notImplementedError()
  }

  /**
   * Create a new entity with resource
   * @param {string} resourceName - Name of resource
   * @param {Object} attributes - Resource attributes to create
   * @returns {Promise.<ClayEntity>} Created data
   */
  create (resourceName, attributes) {
    throw notImplementedError()
  }

  /**
   * Update an existing entity in resource
   * @param {string} resourceName - Name of resource
   * @param {ClayId} id - Resource id
   * @param {Object} attributes - Resource attributes to update
   * @returns {Promise.<ClayEntity>} Updated data
   */
  update (resourceName, id, attributes) {
    throw notImplementedError()
  }

  /**
   * Delete a entity resource
   * @param {string} resourceName - Name of resource
   * @param {ClayId} id - Resource id
   * @returns {Promise.<number>} Destroyed count (0 or 1)
   */
  destroy (resourceName, id) {
    throw notImplementedError()
  }

  /**
   * Drop resource
   * @param {string} resourceName - Name of resource
   * @returns {Promise.<boolean>} False if there were nothing to drop
   */
  drop (resourceName) {
    throw notImplementedError()
  }

  /**
   * List resources
   * @returns {Promise.<Resource>} Resources
   */
  resources () {
    throw notImplementedError()
  }
}

module.exports = [
  cursorMix,
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

/**
 * Resource object
 * @typedef {Object} Resource
 * @property {string} name - Name of resource
 */
