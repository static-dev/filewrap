const test = require('ava')
const File = require('..')

test('exposes absolute and relative paths', (t) => {
  const f = new File('/root', 'file.txt')
  t.truthy(f.relative, 'file.txt')
  t.truthy(f.absolute, '/root/file.txt')
})

test('array map helpers work', (t) => {
  const files = [new File('/a', 'b.txt'), new File('/c', 'd.txt')]
  const absolutes = files.map(File.getAbsolute)
  const relatives = files.map(File.getRelative)
  t.truthy(absolutes[0] === '/a/b.txt')
  t.truthy(absolutes[1] === '/c/d.txt')
  t.truthy(relatives[0] === 'b.txt')
  t.truthy(relatives[1] === 'd.txt')
})
