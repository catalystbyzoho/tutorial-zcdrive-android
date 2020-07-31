"use strict";//No I18N
var isParamPresent = location.search.indexOf("zgs=1") >= 0;
$(document).ready(function() {
  isParamPresent && (document.body.classList.add("global-search"), $("a[href]").attr("target", "_blank"))
});//No I18N
