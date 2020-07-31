// NOTE: Make sure the changes done here is same as done in the same file of zohobooks_website repo

// Workaround - Setting jquery effects to false for the issue of dropdowns in the header
// because of jquery v1.7 stop() method.
$.fx.off = true;
let path = location.pathname;
let edition = path.split('/')[1];
if (edition === 'uk') {
  edition = 'gb';
} else if (edition === 'books') {
  edition = '';
}
window.wsearch.sitename = 'zoho';
window.wsearch.language = 'en';
window.wsearch.productname = 'books';
window.wsearch.searchtype = 'help,kb';
window.wsearch.siteregion = edition;

if (typeof DEVELOPMENT !== 'undefined' && DEVELOPMENT) { //eslint-disable-line
  // To support search api for staging
  let timer = setInterval(function() {
    if (window.wsearch.getDomain) {
      clearInterval(timer);
      window.wsearch.getDomain = function () {
        return 'https://search.localzoho.com';
      };
      window.wsearch.getAndRenderResult(window.wsearch.start);
      window.wsearch.getQueryReplacedURL = function(paramName, newVal) {
        let url = window.location.href;
        newVal = encodeURIComponent(newVal.replace(/^\s+|\s+$/g, ''));
        url = url.replace(/(query=)(.*?)(&|$)/, '$1'+newVal+'$3');
        return url;
      };
    }
  }, 2000);
}