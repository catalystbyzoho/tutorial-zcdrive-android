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

            code.before('<span class="copy-to-clipboard"><p style="box-shadow: 0px 0px 6px #C7C7C729; cursor:pointer; font: normal normal 13px/26px zoho-puvi-medium; background-color: var(--copy-background); color: var(--copy-font); height:24px; width: auto; padding:0px 8px; border: none;">COPY</p></span>');
            $('.copy-to-clipboard').on('mouseleave', function() {
                $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
            });
        }
        
        $(document).ready(function(){
            if(document.getElementById("hidecopy")){
                document.querySelectorAll("pre#hidecopy span.copy-to-clipboard")[0].style.display="none";
            }
            if(document.querySelector("code[data] div#java pre span"))
                document.querySelector("code[data] div#java pre span").remove();
            if(document.querySelector("code[data] div#nodejs pre span"))
                document.querySelector("code[data] div#nodejs pre span").remove();
            if(document.querySelector("code[data] div#python pre span"))
                document.querySelector("code[data] div#python pre span").remove();
        });
    });

    // allow keyboard control for prev/next links
    jQuery(function() {
        jQuery('.nav-prev').click(function(){
            location.href = jQuery(this).attr('href');
        });
        jQuery('.nav-next').click(function() {
            location.href = jQuery(this).attr('href');
        });
    });
    jQuery(document).keydown(function(e) {
      // prev links - left arrow key
      if(e.which == '37') {
        jQuery('.nav.nav-prev').click();
      }
      // next links - right arrow key
      if(e.which == '39') {
        jQuery('.nav.nav-next').click();
      }
    });

    $('article a:not(:has(img)):not(.btn)').addClass('highlight');
});

// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
        var sURLVariables = url[1].split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            obj[sParameterName[0]] = sParameterName[1];
        }
        return obj;
    } else {
        return undefined;
    }
};

// clear auto create pre code block
var autoclear = document.querySelectorAll("pre code pre code");
for(var i=0;i<autoclear.length;i++){
    autoclear[i].parentNode.parentNode.parentNode.querySelectorAll("label.panelswitch div.theme-icon")[0].style.marginTop = "0px";
    var temp = autoclear[i].innerHTML;
    autoclear[i].parentNode.parentNode.style.paddingTop = "25px";
    autoclear[i].parentNode.parentNode.innerHTML = temp;
}