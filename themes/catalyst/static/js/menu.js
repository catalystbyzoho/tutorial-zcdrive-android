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