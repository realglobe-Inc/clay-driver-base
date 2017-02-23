/**
 * Test case for validateDriver.
 * Runs with mocha.
 */
'use strict'

const validateDriver = require('../lib/validating/validate_driver.js')
const assert = require('assert')
const co = require('co')

describe('validate-driver', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Validate driver', () => co(function * () {
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
  }))
})

/* global describe, before, after, it */
