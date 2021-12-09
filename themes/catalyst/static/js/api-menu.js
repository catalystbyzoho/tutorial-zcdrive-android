var initialLoading = function(){
  apiMenu();
}();
function apiMenu(){
  var matches = document.querySelectorAll(`li[data-nav-id$="${window.location.pathname}"]`);
  if (matches.length > 0) {
      var menu = matches[0];
      menu.classList.add("active");

      var maxDepth = 10; // Avoid infinite loop !
      var nextAncestor = menu.closest("li[data-nav-id]");
      while (maxDepth-- >= 0 && nextAncestor !== null) {
          nextAncestor.classList.add("parent");
          var icon = nextAncestor.querySelector('div.category-icon');
          if (icon !== null) {
              icon.classList.remove('right-mini-icon');
              icon.classList.add('down-mini-icon');
          }
          nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
      }
  }
}
function removeActiveClass(){
  var anc = document.querySelectorAll(`li[data-nav-id]`);
  for(var i=1;i<anc.length;i++){
    if(anc[i].classList.value.includes("active")){
      anc[i].classList.remove("active");
    }
  }
  var icons = document.querySelectorAll(".category-icon");
  for(var i=1;i<icons.length;i++){
    if((icons[i].classList.value.includes("down-mini-icon")) ){
      icons[i].classList.remove('down-mini-icon');
      icons[i].classList.add('right-mini-icon');
      icons[i].parentNode.parentNode.childNodes[3].style.display="none";
    }
  }
}
function activateClass(){
  removeActiveClass();
  apiMenu();
}

function addMargin() {
    window.scrollTo(0, window.pageYOffset - 60);
}
window.addEventListener('hashchange', addMargin);

$(document).ready(function(){
  var sectionIds = $('.menu a');
  for(var i=0;i<sectionIds.length -1 ;i++){
    sectionIds[i] = sectionIds[i+1];
  }
  sectionIds.length = sectionIds.length-1;
    $(document).scroll(function(){
        sectionIds.each(function(){
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
              removeActiveClass();
              var ac = container;
              var path = document.querySelectorAll(`section${ac}`)[0].getAttribute("path");
              var matches = document.querySelectorAll(`li[data-nav-id$="${path}"]`);
              if (matches.length > 0) {
                  var menu = matches[0];
                  menu.classList.add("active");

                  var maxDepth = 10; // Avoid infinite loop !
                  var nextAncestor = menu.closest("li[data-nav-id]");
                  while (maxDepth-- >= 0 && nextAncestor !== null) {
                      nextAncestor.classList.add("parent");

                      var icon = nextAncestor.querySelector('div.category-icon');
                      if (icon !== null) {
                          icon.classList.remove('right-mini-icon');
                          icon.classList.add('down-mini-icon');
                          var icons = document.querySelectorAll("div.category-icon");
                          for(var i=0;i<icons.length;i++){
                            if(icons[i].classList.value.includes("down-mini-icon")){
                              icons[i].parentNode.parentNode.childNodes[3].style.display="block";
                            }
                          }
                      }
                      nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
                  }
              }
            } 
        });
    });
});