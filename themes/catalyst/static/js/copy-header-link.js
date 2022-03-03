jQuery(document).ready(function() {
    jQuery('.category-icon').on('click', function() {
        $( this ).children('div').toggleClass("down-mini-icon right-mini-icon") ;
        $( this ).parent().parent().children('ul').toggle() ;
        return false;
    });

	// Add link button for every
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