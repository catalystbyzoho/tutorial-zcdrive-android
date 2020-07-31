"use strict";//No I18N

function throttleEvents(t, e) {
  var n = void 0,
    o = void 0;
  return function() {
    var a = this,
      i = arguments;
    o ? (clearTimeout(n), n = setTimeout(function() {
      Date.now() - o >= e && (t.apply(a, i), o = Date.now())
    }, e - (Date.now() - o))) : (t.apply(a, i), o = Date.now())
  }
}
