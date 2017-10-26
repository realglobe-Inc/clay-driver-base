/**
 * Test case for validateDriver.
 * Runs with mocha.
 */
'use strict'

const validateDriver = require('../lib/validating/validate_driver.js')
const assert = require('assert')


describe('validate-driver', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Validate driver', async () => {
    assert.ifError(
      validateDriver({
        create () {},
        update () {},
        destroy () {},
        list () {},
        one () {},
        drop () {},
        resources () {}
      })
    )
  })
})

/* global describe, before, after, it */
