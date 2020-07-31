! function(window, undefined) {
    var wsearch = function(wsearch) {
        return (wsearch = window.wsearch || {}).i18NJSURL = "https://www.zohowebstatic.com/sites/default/files/js/ssws_en.js", wsearch.resultJSURL = "https://www.zohowebstatic.com/sites/default/files/js/sswebresult.js", wsearch.resultCSSURL = "https://www.zohowebstatic.com/sites/default/files/css/sswebresult.css", wsearch.resultjQueryURL = "https://www.zohowebstatic.com/sites/default/files/js/jquery-1.7.1.min.js", wsearch.init = function() {
            wsearch.loadWSFiles()
        }, wsearch.loadWSFiles = function() {
            wsearch.loadCSSFile(wsearch.resultCSSURL, wsearch.loadJQueryFile)
        }, wsearch.loadJQueryFile = function() {
            "undefined" != typeof jQuery && void 0 !== typeof jQuery && "1.7.1" === jQuery().jquery ? (window._jQueryWS = jQuery, window.jQuery = void 0 === window.jQuery ? jQuery : window.jQuery, wsearch.loadI18NJSFile(!0)) : wsearch.loadJSFile(wsearch.resultjQueryURL, wsearch.loadI18NJSFile)
        }, wsearch.loadI18NJSFile = function(isJqExists) {
            if (!isJqExists) {
                var zsJquery = jQuery;
                window._jQueryWS = zsJquery.noConflict(!0), window.jQuery = void 0 === window.jQuery ? zsJquery : window.jQuery
            }
            wsearch.loadJSFile(wsearch.i18NJSURL, wsearch.loadResJSfile)
        }, wsearch.loadResJSfile = function() {
            wsearch.loadJSFile(wsearch.resultJSURL)
        }, wsearch.loadCSSFile = function(fileURL, callback) {
            if (void 0 !== typeof fileURL) {
                var domCSS = document.createElement("link");
                domCSS.setAttribute("rel", "stylesheet"), domCSS.setAttribute("type", "text/css"), domCSS.setAttribute("href", fileURL), domCSS.onload = function() {
                    callback && callback()
                }, document.getElementsByTagName("head").item(0).appendChild(domCSS)
            }
        }, wsearch.loadJSFile = function(fileURL, callback) {
            if (void 0 !== typeof fileURL) {
                var domscriptJquery = document.createElement("script");
                domscriptJquery.setAttribute("type", "text/javascript"), domscriptJquery.setAttribute("src", fileURL), domscriptJquery.onload = function() {
                    callback && callback()
                }, document.getElementsByTagName("head").item(0).appendChild(domscriptJquery)
            }
        }, wsearch
    }(wsearch);
    window.wsearch = wsearch
}(window), document.addEventListener("DOMContentLoaded", function() {
    window.wsearch.init()
});
