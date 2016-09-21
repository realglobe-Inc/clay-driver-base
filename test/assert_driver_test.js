/**
 * Test case for assertDriver.
 * Runs with mocha.
 */
'use strict'

const assertDriver = require('../lib/assert_driver.js')
const assert = require('assert')
const co = require('co')

describe('assert-driver', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Assert driver', () => co(function * () {
    // assert.doesNotThrow(() => {
    let noop = () => null
    assertDriver({
      open: noop,
      close: noop,
      create: noop,
      read: noop,
      update: noop,
      delete: noop,
      cursor: noop
    })
    // })
  }))
})

/* global describe, before, after, it */
