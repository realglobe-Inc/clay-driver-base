/**
 * Test case for driver.
 * Runs with mocha.
 */
'use strict'

const Driver = require('../lib/driver.js')
const assert = require('assert')
const co = require('co')

describe('driver', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Driver', () => co(function * () {
    let driver = new Driver()
    assert.ok(driver)
  }))
})

/* global describe, before, after, it */
