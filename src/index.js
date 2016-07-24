const U = require('./utils')

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

  throw new Error('wrong token')
}


// buildAstFromArgs :: [String] -> [Ast]
const buildAstFromArgs = tokens => {
  return tokens.map(buildAstFromToken)
}

// buildAstFromTokens :: [String] -> Ast
const buildAstFromTokens = tokens => {
  if (tokens[0] === '(') {
    const func = tokens[1]
    const argsTokens = U.init(tokens.slice(2))
    return [{
      func,
      args: buildAstFromArgs(argsTokens),
    }]
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
