const { describe, it } = require('mocha')
const { expect } = require('chai')

const { wrapBracketsInArray } = require('../src/parse-utils.js')

describe('wrapBracketsInArray', () => {
  it('should wrap brackets in array', () => {
    expect(wrapBracketsInArray(['(', ')'])).eql([['(', ')']])
  })

  it('should wrap brackets with tokens in array', () => {
    expect(wrapBracketsInArray(['(', '+', '1', '2', ')'])).eql([['(', '+', '1', '2', ')']])
  })

  it('should wrap brackets with tokens in array', () => {
    expect(wrapBracketsInArray(['+', '(', '+', '1', '2', ')', '1', '2']))
      .eql(['+', ['(', '+', '1', '2', ')'], '1', '2'])
  })

  it('should not wrap tokens without brackets', () => {
    expect(wrapBracketsInArray(['1', '2']))
      .eql(['1', '2'])
  })
})

