/**
 * Test case for index.
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')


describe('index', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Assert index', async () => {
    assert.ok(index)
    assert.ok(index.create)
    assert.ok(index.Driver)
  })
})

/* global describe, before, after, it */
