/**
 * Test case for bulkMix.
 * Runs with mocha.
 */
'use strict'

const bulkMix = require('../lib/mixins/bulk_mix.js')
const clayId = require('clay-id')
const assert = require('assert')

describe('bulk-mix', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Bulk mix', async () => {
    class BaseClass {
      one () {
        return {id: clayId()}
      }

      list () {
        return [{id: clayId()}, {id: clayId()}]
      }

      create (namespace, attributes) {
        return Promise.resolve(Object.assign({id: clayId()}, attributes))
      }

      update (namespace, id, attributes) {
        return Promise.resolve(Object.assign({id}, attributes))
      }

      destroy (namespace, id) {
        return Promise.resolve(1)
      }
    }

    let BulkMixed = bulkMix(BaseClass)

    let bulkable = new BulkMixed()

    let ones = await bulkable.oneBulk('hoge', ['1', '2'])
    assert.ok(ones)

    let created = await bulkable.createBulk('hoge', [
      {name: 'foo'},
      {name: 'bar'}
    ])
    assert.equal(created.length, 2)

    let updated = await bulkable.updateBulk('hoge', {
      '1': {name: 'foo'},
      '2': {name: 'bar'}
    })
    assert.equal(Object.keys(updated).length, 2)

    let lists = await bulkable.listBulk('hoge', [{}, {}])
    assert.ok(lists)

    let destroyed = await bulkable.destroyBulk('huge', [1, 2])
    assert.deepEqual(destroyed, [1, 1])
  })
})

/* global describe, before, after, it */
