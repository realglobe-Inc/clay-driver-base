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
   * Get a data from namespace
   * @param {string} namespace - Namespace to work with
   * @param {string|number} id - Resource id
   * @returns {Promise.<Resource>} - Found resource
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
   * @returns {Promise.<ResourceList>} - Found resource list
   */
  list (namespace, condition) {
    throw notImplementedError()
  }

  /**
   * Create data with namespace
   * @param {string} namespace - Namepath string
   * @param {Object} attributes - Resource attributes to create
   * @returns {Promise}
   */
  create (namespace, attributes) {
    throw notImplementedError()
  }

  /**
   * Update data with namespace
   * @param {string} namespace - Namepath string
   * @param {string|number} id - Resource id
   * @param {Object} attributes - Resource attributes to update
   * @returns {Promise}
   */
  update (namespace, id, attributes) {
    throw notImplementedError()
  }

  /**
   * Delete data with namespace
   * @param {string} namespace - Namepath string
   * @param {string|number} id - Resource id
   * @returns {Promise}
   */
  destroy (namespace, id) {
    throw notImplementedError()
  }
}

module.exports = [
  bulkMix
].reduce((Driver, mixin) => mixin(Driver), Driver)

/**
 * @typedef {Object} Resource
 * @property {string|number} id - Identifier of the resource
 */
/**
 * @typedef {Object} ResourceList
 * @property {Resource[]} entities
 * @property {Object} meta
 * @property {number} meta.total
 */

