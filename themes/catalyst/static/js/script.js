jQuery(document).ready(function() {
    jQuery('.category-icon').on('click', function() {
        $( this ).toggleClass("fa-angle-down fa-angle-right") ;
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
        e.clearSelection();
        $(e.trigger).attr('aria-label', 'Copied').addClass('tooltipped tooltipped-s');
    });

    // clipboard
    var clipInit = false;
    $('pre code').each(function() {
        var code = $(this),
            text = code.text();

        if (text.length > 5) {
            if (!clipInit) {
                var text, clip = new Clipboard('.copy-to-clipboard', {
                    text: function(trigger) {
                        text = $(trigger).next('code').text();
                        return text.replace(/^\$\s/gm, '');
                    }
                });

                var inPre;
                clip.on('success', function(e) {
                    e.clearSelection();
                    inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                    $(e.trigger).attr('aria-label', 'Copied').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                });

                clip.on('error', function(e) {
                    inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                    $(e.trigger).attr('aria-label', fallbackMessage(e.action)).addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                    $(document).one('copy', function(){
                        $(e.trigger).attr('aria-label', 'Copied').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                    });
                });

                clipInit = true;
            }
            code.before('<span class="copy-to-clipboard"><p>COPY</p></span>');
            $('.copy-to-clipboard').on('mouseleave', function() {
                $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
            });   
        }
    });
});