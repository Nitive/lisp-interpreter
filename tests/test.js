const { describe, it } = require('mocha')
const { expect } = require('chai')

const lisp = require('../src/')

describe('test', () => {
  it('works', () => {
    const ast = [{
      func: '+',
      args: [{
        type: 'number',
        value: 1,
      }, {
        type: 'number',
        value: 2,
      }],
    }]
    expect(lisp.ast('(+ 1 2)')).eql(ast)
  })
})
