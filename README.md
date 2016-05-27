# Filewrap

[![npm](http://img.shields.io/npm/v/filewrap.svg?style=flat)](https://badge.fury.io/js/filewrap) [![tests](http://img.shields.io/travis/static-dev/filewrap/master.svg?style=flat)](https://travis-ci.org/static-dev/filewrap) [![dependencies](http://img.shields.io/david/static-dev/filewrap.svg?style=flat)](https://david-dm.org/static-dev/filewrap) [![coverage](http://img.shields.io/coveralls/static-dev/filewrap.svg?style=flat)](https://coveralls.io/github/static-dev/filewrap)

A light wrapper for files to make absolute and relative paths easier

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

Sometimes you will have a project where you need to transform paths to and from relative/absolute frequently. It's super annoying to continuously run something like `absolutePath.replace(rootPath, '')` and `path.join(rootPath, relativePath)` whenever this is needed. To make this cleaner and easier, you can use a small wrapper around the file that exposes both paths.

### Installation

`npm install filewrap -S`

> **Note:** This project is compatible with node v6+ only

### Usage

```js
const File = require('filewrap')

const f = new File('/Users/doge/projects', 'personal-site/index.html')
f.relative // personal-site/index.html
f.absolute // /Users/doge/projects/personal-site/index.html
```

If you are starting with an absolute path, you can initialize with the absolute path in the same way, filewrap will figure out the relative path for you and make sure it's formatted consistently.

```js
const File = require('filewrap')

const f = new File('/Users/doge/projects', '/Users/doge/projects/personal-site/index.html')
f.relative // personal-site/index.html
f.absolute // /Users/doge/projects/personal-site/index.html
```

Now if you have an array of these wrapped files, you may want to quickly unwrap them all into relative or absolute paths. Filewrap also exposes a couple convenient helpers that make this clear and simple:

```js
const {getRelative, getAbsolute} = require('filewrap')

arrayOfFilewrapObjects.map(getRelative)
arrayOfFilewrapObjects.map(getAbsolute)
```

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
