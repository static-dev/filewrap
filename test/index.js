const test = require('ava')
const s = require('path').sep
const File = require('..')

test('can be initialized with relative path', (t) => {
  const f = new File(`${s}root`, 'file.txt')
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === `${s}root${s}file.txt`)
})

test('can be initialized with an absolute path', (t) => {
  const f = new File(`${s}root`, `${s}root${s}file.txt`)
  t.truthy(f.relative === 'file.txt')
  t.truthy(f.absolute === `${s}root${s}file.txt`)
})

test('root with trailing slash still resolves correctly', (t) => {
  const f = new File(`${s}root${s}`, `${s}root${s}file.txt`)
  const f2 = new File(`${s}root${s}`, `file.txt`)
  t.truthy(f.relative === `file.txt`)
  t.truthy(f.absolute === `${s}root${s}file.txt`)
  t.truthy(f2.relative === `file.txt`)
  t.truthy(f2.absolute === `${s}root${s}file.txt`)
})

test('path with leading slash still resolves correctly', (t) => {
  const f = new File(`${s}root`, `${s}file.txt`)
  const f2 = new File(`${s}root${s}`, `${s}file.txt`)
  t.truthy(f.relative === `file.txt`)
  t.truthy(f.absolute === `${s}root${s}file.txt`)
  t.truthy(f2.relative === `file.txt`)
  t.truthy(f2.absolute === `${s}root${s}file.txt`)
})

test('array map helpers work', (t) => {
  const files = [new File(`${s}a`, 'b.txt'), new File(`${s}c`, 'd.txt')]
  const absolutes = files.map(File.getAbsolute)
  const relatives = files.map(File.getRelative)
  t.truthy(absolutes[0] === `${s}a${s}b.txt`)
  t.truthy(absolutes[1] === `${s}c${s}d.txt`)
  t.truthy(relatives[0] === 'b.txt')
  t.truthy(relatives[1] === 'd.txt')
})
