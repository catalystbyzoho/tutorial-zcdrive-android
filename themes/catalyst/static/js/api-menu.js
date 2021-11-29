var matches = document.querySelectorAll(`li[data-nav-id$="${window.location.pathname}"]`);
if (matches.length > 0) {
    var menu = matches[0];
    menu.classList.add("active");

    var maxDepth = 10; // Avoid infinite loop !
    var nextAncestor = menu.closest("li[data-nav-id]");
    while (maxDepth-- >= 0 && nextAncestor !== null) {
        nextAncestor.classList.add("parent");
        var icon = nextAncestor.querySelector('i.category-icon');
        if (icon !== null) {
            icon.classList.remove('fa-angle-right');
            icon.classList.add('fa-angle-down');
        }
        nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
    }
}
function activateClass(e){
  var anc = document.querySelectorAll(`li[data-nav-id]`);
  for(var i=1;i<anc.length;i++){
    if(document.querySelectorAll(`li[data-nav-id]`)[i].classList.value.includes("active")){
      document.querySelectorAll(`li[data-nav-id]`)[i].classList.remove("active");
    }
  }
  var icons = document.querySelectorAll("li.dd-item.haschildren.parent div i");
  for(var i=1;i<icons.length;i++){
    if((document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.value.includes("fa-angle-down")) ){
      document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.remove('fa-angle-down');
      document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.add('fa-angle-right');
      document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].parentNode.parentNode.childNodes[3].style.display="none";
    }
  }

  var matches = document.querySelectorAll(`li[data-nav-id$="${e.getAttribute('path')}"]`);
  if (matches.length > 0) {
      var menu = matches[0];
      menu.classList.add("active");

      var maxDepth = 10; // Avoid infinite loop !
      var nextAncestor = menu.closest("li[data-nav-id]");
      while (maxDepth-- >= 0 && nextAncestor !== null) {
          nextAncestor.classList.add("parent");

          var icon = nextAncestor.querySelector('i.category-icon');
          if (icon !== null) {
              icon.classList.remove('fa-angle-right');
              icon.classList.add('fa-angle-down');
              var icons = document.querySelectorAll("li.dd-item.haschildren.parent div i");
              for(var i=1;i<icons.length;i++){
                if((document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.value.includes("fa-angle-down")) ){
                  document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].parentNode.parentNode.childNodes[3].style.display="block";
                }
              }
          }
          nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
      }
  }
}

function addMargin() {
    window.scrollTo(0, window.pageYOffset - 40);
    var anc = document.querySelectorAll(`li[data-nav-id]`);
    for(var i=1;i<anc.length;i++){
      if(document.querySelectorAll(`li[data-nav-id]`)[i].classList.value.includes("active")){
        document.querySelectorAll(`li[data-nav-id]`)[i].classList.remove("active");
      }
    }
    var icons = document.querySelectorAll("li.dd-item.haschildren.parent div i");
    for(var i=1;i<icons.length;i++){
      if((document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.value.includes("fa-angle-down")) ){
        document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.remove('fa-angle-down');
        document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.add('fa-angle-right');
        document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].parentNode.parentNode.childNodes[3].style.display="none";
      }
    }

    var ac = window.location.hash;
    var path = document.querySelectorAll(`section${ac}`)[0].getAttribute("path");
    var matches = document.querySelectorAll(`li[data-nav-id$="${path}"]`);
    if (matches.length > 0) {
        var menu = matches[0];
        menu.classList.add("active");

        var maxDepth = 10; // Avoid infinite loop !
        var nextAncestor = menu.closest("li[data-nav-id]");
        while (maxDepth-- >= 0 && nextAncestor !== null) {
            nextAncestor.classList.add("parent");

            var icon = nextAncestor.querySelector('i.category-icon');
            if (icon !== null) {
                icon.classList.remove('fa-angle-right');
                icon.classList.add('fa-angle-down');
                var icons = document.querySelectorAll("li.dd-item.haschildren.parent div i");
                for(var i=0;i<icons.length;i++){
                  if(document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].classList.value.includes("fa-angle-down")){
                    document.querySelectorAll("li.dd-item.haschildren.parent div i")[i].parentNode.parentNode.childNodes[3].style.display="block";
                  }
                }
            }
            nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
        }
    }
}
window.addEventListener('hashchange', addMargin);