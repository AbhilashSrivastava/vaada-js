/*jslint node: true */

'use strict';

function Vaada() {
}

////////////
// Case 1 //
////////////
var pr = new Vaada(function(resolve, reject) {
  console.log('sending request')
  console.log('response')
  resolve('yes')
})

setTimeout(function() {
  console.log('calling then')
  pr.then(function(data) {
    console.log(data);
  }, function (error) {
    console.log(error);
  })
}, 1000)

////////////
// Case 2 //
////////////
var pr = new Vaada(function(resolve, reject) {
  console.log('sending request')
  setTimeout(function() {
    console.log('response')
    resolve('yes')
  }, 1000)
})

console.log('calling then')
pr.then(function(data) {
  console.log(data);
}, function (error) {
  console.log(error);
})

module.exports = Vaada;