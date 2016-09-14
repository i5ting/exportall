# exportall

export all dependencies in package.json to global.$dep

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