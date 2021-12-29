/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/

var globalAutoComplete = (function(){
    // "use strict";
    function globalAutoComplete(options){
        if (!document.querySelector) return;

        // helpers
        function hasClass(el, className){ return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className); }

        function addEvent(el, type, handler){
            if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
        }
        function removeEvent(el, type, handler){
            // if (el.removeEventListener) not working in IE11
            if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
        }
        function live(elClass, event, cb, context){
            addEvent(context || document, event, function(e){
                var found, el = e.target || e.srcElement;
                while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
                if (found) cb.call(el, e);
            });
        }

        var o = {
            selector: 0,
            source: 0,
            minChars: 1,
            delay: 150,
            offsetLeft: 0,
            offsetTop: 1,
            cache: 1,
            menuClass: '',
            renderItem: function (item, search){
                // escape special characters
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="global-autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
                
            },
            onSelect: function(e, term, item){}
        };
        for (var k in options) { if (options.hasOwnProperty(k)) o[k] = options[k]; }

        // init
        var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);
        for (var i=0; i<elems.length; i++) {
            var that = elems[i];

            // create suggestions container "sc"
            that.sc = document.createElement('div');
            that.sc.className = 'global-autocomplete-suggestions '+o.menuClass;

            that.autocompleteAttr = that.getAttribute('autocomplete');
            that.setAttribute('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next){
                var rect = that.getBoundingClientRect();
                if (!resize) {
                    that.sc.style.display = 'block';
                    document.getElementById("GlobalSearchResults").style="position:fixed; display:flex;";

                    if (!that.sc.maxHeight) { that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight); }
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.global-autocomplete-suggestion').offsetHeight;
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop = 0;
                        else {
                            var scrTop = that.sc.scrollTop, selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;
                            else if (selTop < 0)
                                that.sc.scrollTop = selTop + scrTop;
                        }
                }
                setInitialValue();

            }
            addEvent(window, 'resize', that.updateSC);

            var search_element = document.createElement("div");
            search_element.setAttribute("id","GlobalSearchResults");
            search_element.setAttribute("class","global-search-result-container");

            var right_search_content = document.createElement("div");
            right_search_content.setAttribute("class","right-search-content");
            var search_content = `<h2 class="global-search-title"></h2>
            <div class="context" style="text-align:center;"></div>
            <p class="global-search-desc"></p>
            <div class="global-toc">
            <div class="global-toc-title">ON THIS PAGE</div>
            <div id="toc"></div>
            </div>`;
            right_search_content.innerHTML = search_content;
            
            document.body.appendChild(search_element);
            document.getElementById("GlobalSearchResults").appendChild(that.sc);
            document.getElementById("GlobalSearchResults").appendChild(right_search_content);
            live('global-autocomplete-suggestion', 'mouseleave', function(e){
                var sel = that.sc.querySelector('.global-autocomplete-suggestion.selected');
                if (sel) setTimeout(function(){ sel.className = sel.className.replace('selected', ''); }, 20);
            }, that.sc);

            live('global-autocomplete-suggestion', 'mouseover', function(e){
                var sel = that.sc.querySelector('.global-autocomplete-suggestion.selected');
                if (sel) sel.className = sel.className.replace('selected', '');
                this.className += ' selected';
            }, that.sc);

            live('global-autocomplete-suggestion', 'mousedown', function(e){
                if (hasClass(this, 'global-autocomplete-suggestion')) { // else outside click
                    var v = this.getAttribute('data-val');
                    that.value = v;
                    o.onSelect(e, v, this);
                    that.sc.style.display = 'none';
                    document.getElementById("GlobalSearchResults").style="position:fixed; display:flex;";
                }
            }, that.sc);

            that.blurHandler = function(){
                try { var over_sb = document.querySelector('.global-autocomplete-suggestions:hover'); } catch(e){ var over_sb = 0; }
                if (!over_sb) {
                    that.last_val = that.value;
                    that.sc.style.display = 'none';
                    document.getElementById("GlobalSearchResults").style="position:fixed; display:flex;";
                    setTimeout(function(){ that.sc.style.display = 'none'; }, 350); // hide suggestions on fast input
                } else if (that !== document.activeElement) setTimeout(function(){ that.focus(); }, 20);
            };
            addEvent(that, 'blur', that.blurHandler);

            var suggest = function(data){
                var val = that.value;
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val);
                    that.sc.innerHTML = s;
                    that.updateSC(0);
                }
                else
                    that.sc.style.display = 'none';
            }

            that.keydownHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                // down (40), up (38)
                if ((key == 40 || key == 38) && that.sc.innerHTML) {
                    var next, sel = that.sc.querySelector('.global-autocomplete-suggestion.selected');
                    if (!sel) {
                        next = (key == 40) ? that.sc.querySelector('.global-autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
                        next.className += ' selected';
                        console.log(next);
                        that.value = next.getAttribute('data-val');
                    } else {
                        next = (key == 40) ? sel.nextSibling : sel.previousSibling;
                        if (next) {
                            sel.className = sel.className.replace('selected', '');
                            next.className += ' selected';
                            that.value = next.getAttribute('data-val');
                        }
                        else { sel.className = sel.className.replace('selected', ''); that.value = that.last_val; next = 0; }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                // esc
                else if (key == 27) { that.value = that.last_val; that.sc.style.display = 'none'; }
                // enter
                else if (key == 13 || key == 9) {
                    var sel = that.sc.querySelector('.global-autocomplete-suggestion.selected');
                    if (sel && that.sc.style.display != 'none') { o.onSelect(e, sel.getAttribute('data-val'), sel); setTimeout(function(){ that.sc.style.display = 'none'; }, 20); }
                }
            };
            addEvent(that, 'keydown', that.keydownHandler);

            that.keyupHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
                    var val = that.value;
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) { suggest(that.cache[val]); return; }
                                // no requests if previous suggestions were empty
                                for (var i=1; i<val.length-o.minChars; i++) {
                                    var part = val.slice(0, val.length-i);
                                    if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                }
                            }
                            that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.style.display = 'none';
                        document.getElementById("GlobalSearchResults").style="position:fixed; display:flex;";
                    }
                }
            };
            addEvent(that, 'keyup', that.keyupHandler);

            that.focusHandler = function(e){
                that.last_val = '\n';
                that.keyupHandler(e)
            };
            if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
        }

        // public destroy method
        this.destroy = function(){
            for (var i=0; i<elems.length; i++) {
                var that = elems[i];
                removeEvent(window, 'resize', that.updateSC);
                removeEvent(that, 'blur', that.blurHandler);
                removeEvent(that, 'focus', that.focusHandler);
                removeEvent(that, 'keydown', that.keydownHandler);
                removeEvent(that, 'keyup', that.keyupHandler);
                if (that.autocompleteAttr)
                    that.setAttribute('autocomplete', that.autocompleteAttr);
                else
                    that.removeAttribute('autocomplete');
                document.body.removeChild(that.sc);
                that = null;
            }
        };
    }
    return globalAutoComplete;
})();

(function(){
    if (typeof define === 'function' && define.amd)
        define('globalAutoComplete', function () { return globalAutoComplete; });
    else if (typeof module !== 'undefined' && module.exports)
        module.exports = globalAutoComplete;
    else
        window.globalAutoComplete = globalAutoComplete;
})();

//Initial value
function setInitialValue(){
    var e = document.querySelector(".global-autocomplete-suggestion");
    if(e){
        e.classList.add("selected");
    }
    var array = [];
    if(e){
    var title = e.getAttribute("data-title");
    var desc = e.getAttribute("data-desc");
    var tags = e.getAttribute("data-tags");
    var uri = e.getAttribute("data-uri");
    var page = uri.split("/")[3];
    

    var toc = document.querySelector("#toc");
    toc.innerHTML="";
    var query = document.querySelector(".right-search-content");
    query.children[0].innerHTML = page+" | "+title;
    var url="",ref="";
    var path = [];
    path=uri.split("/");
    for(var i=3; i<path.length; i++){
        url += path[i];
        if( i+2 < path.length){
            url += " > ";
        }
    }
    query.children[1].innerHTML = url;
    query.children[2].innerHTML = desc;
    array=tags.split(",");
    for(var i=0;i<array.length;i++){
        var ele = document.createElement("a");
        var identity = array[i].toLowerCase().split(" ");
        var ref_id="";
        if(identity.length > 1){
            for(var j=0;j<identity.length;j++){
                ref_id += identity[j];
                if(j+1 < identity.length){
                    ref_id += "-";
                }
            }
            ref = uri+"#"+ref_id;
        }else{
            ref = uri+"#"+identity[0];
        }
        ele.setAttribute("href",ref);
        ele.innerHTML = array[i];
        toc.appendChild(ele);
    }
    }
};