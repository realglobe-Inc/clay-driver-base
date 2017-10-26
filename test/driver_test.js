/**
 * Test case for driver.
 * Runs with mocha.
 */
'use strict'

const Driver = require('../lib/driver.js')
const assert = require('assert')


describe('driver', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Driver', async () => {
    let driver = new Driver()
    assert.ok(driver)
  })
})

/* global describe, before, after, it */
