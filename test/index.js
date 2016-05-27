const test = require('ava')
const File = require('..')

test('can be initialized with relative path', (t) => {
  const f = new File('/root', 'file.txt')
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === '/root/file.txt')
})

test('can be initialized with an absolute path', (t) => {
  const f = new File('/root', '/root/file.txt')
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === '/root/file.txt')
})

test('root with trailing slash still resolves correctly', (t) => {
  const f = new File('/root/', '/root/file.txt')
  const f2 = new File('/root/', 'file.txt')
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === '/root/file.txt')
  t.truthy(f2.relative === 'file.txt')
  t.truthy(f2.absolute === '/root/file.txt')
})

test('path with leading slash still resolves correctly', (t) => {
  const f = new File('/root', '/file.txt')
  const f2 = new File('/root/', '/file.txt')
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === '/root/file.txt')
  t.truthy(f2.relative === 'file.txt')
  t.truthy(f2.absolute === '/root/file.txt')
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
