# exportall

export all dependencies in package.json to global.$dep

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/exportall?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/exportall.svg?style=flat-square)](https://www.npmjs.com/package/exportall)
[![Build](https://travis-ci.org/i5ting/exportall.svg?branch=master)](https://travis-ci.org/i5ting/exportall)
[![codecov.io](https://codecov.io/github/i5ting/exportall/coverage.svg?branch=master)](https://codecov.io/github/i5ting/exportall?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install


```
npm i -S exportall
```

## Usages

```
require('exportall')(__dirname)

console.dir($dep)

var debug = $dep.Debug('exportall')

debug('debug it')
```
