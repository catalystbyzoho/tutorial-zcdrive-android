var matches = document.querySelectorAll(`li[data-nav-id$="${window.location.pathname}"]`);
if (matches.length > 0) {
    var menu = matches[0];
    menu.classList.add("active");
    var maxDepth = 10; // Avoid infinite loop !
    var nextAncestor = menu.closest("li[data-nav-id]");
    var hgt = 0;
    while (maxDepth-- >= 0 && nextAncestor !== null) {
        nextAncestor.classList.add("parent");
        var icon = nextAncestor.querySelector('div.category-icon div');
        if (icon !== null) {
            icon.classList.remove('right-mini-icon');
            icon.classList.add('down-mini-icon');
            if(nextAncestor.getAttribute("weight") != '0'){
                hgt += nextAncestor.children[1].scrollHeight;
                nextAncestor.children[1].style.maxHeight = hgt + "px";
                nextAncestor.children[1].style.overflow = "unset";
            }else{
                hgt += nextAncestor.children[1].scrollHeight;
                nextAncestor.children[1].style.maxHeight = hgt + "px";
                nextAncestor.children[1].style.overflow = "unset";
                nextAncestor = null;
            }
        }
        if(nextAncestor !== null){
            nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
        }
    }
}

function loader(){
    var ele = document.querySelector("ul.menu");
    if(ele){
        ele.style.display="none";
        setTimeout(()=>{
            ele.style.display="block";
        },0);
    }
}
loader();