const path = require('path')

module.exports = class File {
  constructor (root, _p) {
    let p = path.normalize(_p)
    if (p.match(root)) p = p.replace(root, '')
    if (p[0] === path.sep) p = p.substring(1)
    this.absolute = path.join(root, p)
    this.relative = p
  }
}

module.exports.getRelative = (f) => f.relative
module.exports.getAbsolute = (f) => f.absolute
