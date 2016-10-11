'use strict'

const Inflector = require('inflected')
const debug = require('debug')('exportall')

/* global $dep */
global.$dep = {}

module.exports = function (packageFile) {
  debug(packageFile + '/package.json')

  let dependencies = require(packageFile.replace(/package\.json/g, '') + '/package.json')['dependencies']

  for (let moduleName in dependencies) {
    let _name = moduleName.replace(/-/g, '_')
    _name = Inflector.classify(_name)

    debug(_name)

    $dep[_name] = require(moduleName)
  }

  return $dep
}
