"use strict";var isParamPresent=location.search.indexOf("zgs=1")>=0;$(document).ready(function(){isParamPresent&&(document.body.classList.add("global-search"),$("a[href]").attr("target","_blank"))});
