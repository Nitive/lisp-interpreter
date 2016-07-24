const { describe, it } = require('mocha')
const { expect } = require('chai')

const lisp = require('../src/')

describe('ast', () => {
  it('should parse plain list', () => {
    const ast = {
      func: '+',
      args: [{
        type: 'number',
        value: 1,
      }, {
        type: 'number',
        value: 2,
      }],
    }
    expect(lisp.ast('(+ 1 2)')).eql(ast)
  })

  it('should parse nested list', () => {
    const ast = {
      func: '+',
      args: [{
        type: 'number',
        value: 1,
      }, {
        func: '+',
        args: [{
          type: 'number',
          value: 2,
        }, {
          type: 'number',
          value: 3,
        }],
      }],
    }
    expect(lisp.ast('(+ 1 (+ 2 3))')).eql(ast)
  })
})
