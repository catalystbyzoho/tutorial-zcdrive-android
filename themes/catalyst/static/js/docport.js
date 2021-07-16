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