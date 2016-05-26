const path = require('path')

module.exports = class File {
  constructor (root, p) {
    this.absolute = path.join(root, p)
    this.relative = path.normalize(p)
  }
}

module.exports.getRelative = (f) => f.relative
module.exports.getAbsolute = (f) => f.absolute
