
exports.identity = x => x

exports.head = arr => arr[0]
exports.init = arr => {
  if (arr.length === 0) {
    throw new Error('Array can\'t be empty')
  }
  return arr.slice(0, arr.length - 1)
}
