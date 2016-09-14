global.$dep = {
  
}

var Inflector = require('inflected');

module.exports = function (package_file) {
  var dependencies = require(package_file + '/package.json')['dependencies']
  
  for (var module_name in dependencies) {
    _name = module_name.replace(/-/g, '_')
    _name = Inflector.classify(_name)
    // console.log(_name)
    
    $dep[_name] = require(module_name)
  }
  
  return $dep
}