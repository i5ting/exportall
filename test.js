var test   = require('ava');
var should = require('chai').should();
var q      = require('.')(__dirname);

test('test', function (t){
    // 断言
   // q.Debug.should.to.be.an('function');
   t.is(typeof q.Debug, 'function');
});

