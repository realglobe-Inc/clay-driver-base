/**
 * Abstract driver
 * @abstract
 * @class Driver
 */
'use strict'

const { ifError } = require('assert')
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
   * @param {Object} [condition={}] - List condition query
   * @param {Object} [condition.filter={}] - Filter condition
   * @param {Object} [condition.page={}] - Page condition
   * @param {Object} [condition.page.number=1] - Number of page, start with 1
   * @param {Object} [condition.page.size=100] - Number of resources per page
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
}

module.exports = Driver

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
