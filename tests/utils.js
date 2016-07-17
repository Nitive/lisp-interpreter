const { describe, it } = require('mocha')
const { expect } = require('chai')

const U = require('../src/utils')

describe('utils', () => {
  it('init should works', () => {
    expect(U.init([1, 2, 3])).eql([1, 2])
  })

  it('init should throw error if passed array is empty', () => {
    expect(() => U.init([])).throws()
  })
})