const U = require('./utils')

const isOpenBracket = x => x === '('
const isCloseBracket = x => x === ')'
const isBracket = x => isOpenBracket(x) || isCloseBracket(x)

const isAllBracketsClosed = tokens => {
  const onlyBrackets = tokens.filter(isBracket)
  return onlyBrackets.filter(isOpenBracket).length === onlyBrackets.filter(isCloseBracket).length
}

exports.wrapBracketsInArray = tokens => {
  const wrappedTokens = []
  for (const token of tokens) {
    const lastToken = U.last(wrappedTokens)
    switch (token) {
      case '(':
        if (!Array.isArray(lastToken) || isAllBracketsClosed(lastToken)) {
          wrappedTokens.push([token])
          continue
        }

        lastToken.push(token)
        break

      case ')':
        lastToken.push(token)
        break

      default:
        if (!Array.isArray(lastToken) || isAllBracketsClosed(lastToken)) {
          wrappedTokens.push(token)
          continue
        }
        lastToken.push(token)
        break
    }
  }
  return wrappedTokens
}


