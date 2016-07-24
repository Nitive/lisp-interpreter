const U = require('./utils')
const { wrapBracketsInArray } = require('../src/parse-utils.js')

// tokens: '(', ')', identifier, string, number

// splitIntoTokens :: String -> [String]
const splitIntoTokens = code => {
  return code
    .replace(/\)/g, ' ) ')
    .replace(/\(/g, ' ( ')
    .split(' ')
    .filter(U.identity)
}

const isNumber = x => /\d+/.test(x)
// const isIdentifier = x => x.test(/[^"]+/)

// buildAstFromToken :: String -> Ast
const buildAstFromToken = token => {
  if (isNumber(token)) {
    return {
      type: 'number',
      value: Number(token),
    }
  }

  throw new Error(`wrong token ${token}`)
}


// buildAstFromTokens :: [Token] | Token -> Ast
const buildAstFromTokens = tokens => {
  if (!Array.isArray(tokens)) {
    return buildAstFromToken(tokens)
  }

  if (tokens[0] === '(') {
    const func = tokens[1]
    const argsTokens = wrapBracketsInArray(tokens.slice(2, -1))
    return {
      func,
      args: argsTokens.map(buildAstFromTokens),
    }
  }

  throw new Error('Program should start with (')
}

module.exports = {
  // ast :: String -> Ast
  ast(code) {
    const tokens = splitIntoTokens(code)
    return buildAstFromTokens(tokens)
  },
}
