var matches = document.querySelectorAll(`li[data-nav-id$="${window.location.pathname}"]`);

if (matches.length > 0) {
    var menu = matches[0];
    menu.classList.add("active");
    menu.classList.add("current");

    var maxDepth = 10; // Avoid infinite loop !
    var nextAncestor = menu.closest("li[data-nav-id]");
    while (maxDepth-- >= 0 && nextAncestor !== null) {
        nextAncestor.classList.add("parent");
        nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
    }
}
var done=document.querySelectorAll("li.dd-item");
for(var i=0;i<done.length;i++){
    if(done[i].classList.value.includes("current")){
        break;
    }
    else{
        done[i].classList.add("is-done");
    }
}