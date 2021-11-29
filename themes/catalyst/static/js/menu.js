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