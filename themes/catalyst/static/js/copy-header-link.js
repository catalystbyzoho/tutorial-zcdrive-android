jQuery(document).ready(function() {
    var text, clip = new Clipboard('.anchor');
    $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function (index, html) {
        var element = $(this);
        var url = document.location.origin + document.location.pathname;
        var link = url + "#" + element[0].getAttribute("ref");
        
        return " <span class='anchor' data-clipboard-text='" + link + "'>" +
            "<div class='fa hovlink'></div>" +
            "</span>";
    });

    $(".anchor").on('mouseleave', function (e) {
        $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
    });

    clip.on('success', function (e) {
        debugger
        e.clearSelection();
        $(e.trigger).attr('aria-label', 'Copied').addClass('tooltipped tooltipped-s');
    });
});

var acc = document.getElementsByClassName("category-icon");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    var cls = this.children[0].classList;
    var panel = this.parentElement.parentElement.children[1];

    if(cls.value.includes("right-mini-icon")){
        cls.remove("right-mini-icon");
        cls.add("down-mini-icon");
        var matches = this;
        if (matches) {
            var menu = matches;
            var maxDepth = 10;
            var nextAncestor = menu.closest("li[data-nav-id]");
            var hgt = 0;
            while (maxDepth-- >= 0 && nextAncestor !== null) {
                if(nextAncestor.getAttribute("weight") != '0'){
                    hgt += nextAncestor.children[1].scrollHeight;
                    nextAncestor.children[1].style.maxHeight = hgt + "px";
                    nextAncestor.children[1].style.overflow = "unset";
                    nextAncestor = nextAncestor.parentNode.closest("li[data-nav-id]");
                }else{
                    hgt += nextAncestor.children[1].scrollHeight;
                    nextAncestor.children[1].style.maxHeight = hgt + "px";
                    nextAncestor.children[1].style.overflow = "unset";
                    nextAncestor = null;
                }
            }
        }
    }else{
        cls.remove("down-mini-icon");
        cls.add("right-mini-icon");
        panel.style.maxHeight = "0px";
        panel.style.overflow = "hidden";
    }
  });
}