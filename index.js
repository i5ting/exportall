global.$dep = {
  
}

var path = require('path')
var Inflector = require('inflected');
var debug = require('debug')('exportall')

module.exports = function (package_file) {
  debug(package_file + '/package.json')
  
  var dependencies = require(package_file + '/package.json')['dependencies']
  
  for (var module_name in dependencies) {
    _name = module_name.replace(/-/g, '_')
    _name = Inflector.classify(_name)
    
    debug(_name)
    
    $dep[_name] = require(module_name)
  }
  
  return $dep
}