import test from 'ava';

test('$dep', function * (t) {
  require('.')(__dirname)
  
  t.true($dep['Debug'] != undefined);
  t.true($dep['Inflected']!= undefined);
});


test('$dep.Inflector', function * (t) {
  require('.')(__dirname)
  
  var Inflector = $dep['Inflected']

  t.is(Inflector.pluralize('Category'), 'Categories')
});

