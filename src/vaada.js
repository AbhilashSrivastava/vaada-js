/*jslint node: true */

'use strict';

// fn (resolveCb, rejectCb) {
//   if (true) {
//     resolveCb('yes')
//   } else {
//     rejectCb('no');
//   }
// }

function Vaada(fn) {
  this.resolveCb = null;
  
  this.resolveVal = null;

  this._state = "PENDING";

  console.log('Vaada init', this)
  fn(this._resolve.bind(this))
}

Vaada.prototype._resolve = function (value){
  // then has not been called
  if (this.resolveCb === null) {
    // then has not been called
    this._state = "RESOLVED";
    this.resolveVal = value;
    return
  }
    // async?
  this.resolveCb(value);
  return
}

Vaada.prototype._handle = function (callback){
  console.log('handler')
  callback(this.resolveVal);
}

Vaada.prototype.then = function (resolveCb, rejectCb) {
  console.log('then', this)
  if (this._state === "PENDING") {
  // if state is pending then set this' cb to passed callback
    this.resolveCb = resolveCb;
    return;
  }
  // else trigger cb
  this._handle(resolveCb);
}

var pr = new Vaada(function(resolve, reject) {
  console.log('sending request')
  // setTimeout(function() {
    console.log('response')
    resolve('yes')
  // }, 1000)
})

setTimeout(function() {
  console.log('calling then')
  pr.then(function(data) {
    console.log(data);
  }, function (error) {
    console.log(error);
  })
}, 1000)












































module.exports = Vaada;