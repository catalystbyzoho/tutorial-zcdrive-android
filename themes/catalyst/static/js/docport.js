jQuery(document).ready(function() {
	// Open/Close left menu elements
    jQuery('article aside i.ddexp').on('click', function() {
    	console.log($(this))
        $( this ).toggleClass("fa-chevron-right fa-chevron-down") ;
        $( this ).parent().children('ul').toggle() ;
        return false;
    });

});


(function scrollSpy() {
  var OFFSET = 10;
  var timer;
  var headingsCache;

  var findHeadings = function findHeadings() {
    return headingsCache || document.querySelectorAll('.TableOfContents li > a');
  };

  var onScroll = function onScroll() {
    if (timer) {
      // throttle
      return;
    }

    timer = setTimeout(function() {
      timer = null;
      var activeNavFound = false;
      var headings = findHeadings(); 

      for (var i = 0; i < headings.length; i++) {

        var currNavActive = !activeNavFound;

        if (currNavActive && i < headings.length - 1) {
          var heading = headings[i + 1];
          var next = decodeURIComponent(heading.href.split('#')[1]);
          var nextHeader = document.getElementById(next);

          if (nextHeader) {
            var top = nextHeader.getBoundingClientRect().top;
            currNavActive = top > OFFSET;
          } else {
            console.error('Can not find header element', {
              id: next,
              heading: heading,
            });
          }
        }

        if (currNavActive) {
          activeNavFound = true;
          headings[i].parentElement.classList.add('active');
        } else {
          headings[i].parentElement.classList.remove('active');
        }
      }
    }, 100);
  };

  document.addEventListener('scroll', onScroll);
  document.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', function() {
    headingsCache = findHeadings();
    onScroll();
  });
})();




// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
        var sURLVariables = url[1].split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            obj[sParameterName[0]] = sParameterName[1];
        }
        return obj;
    } else {
        return undefined;
    }
};