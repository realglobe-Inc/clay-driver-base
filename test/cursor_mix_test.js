/**
 * Test case for cursorMix.
 * Runs with mocha.
 */
'use strict'

const cursorMix = require('../lib/mixins/cursor_mix.js')
const {ok, equal} = require('assert')
const co = require('co')

describe('cursor-mix', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cursor mix', () => co(function * () {
    class Listable {
      list (resourceName, options = {}) {
        let {filter = {}, page = {}} = options
        if (page.number > 3) {
          return Promise.resolve({entities: [], meta: {total: 3}})
        } else {
          return Promise.resolve({entities: [{id: page.number}], meta: {total: 3}})
        }
      }
    }

    const CursorMixed = cursorMix(Listable)

    let cursorMixed = new CursorMixed()

    let cursor = yield cursorMixed.cursor('hoge', {
      parser (v) {
        return v.map((v) => Object.assign(v, {
          parsed: true
        }))
      }
    })
    equal(cursor.length, 3)
    for (let fetch of cursor) {
      let entity = yield fetch()
      ok(entity)
      ok(entity.parsed)
    }
  }))
})

/* global describe, before, after, it */
