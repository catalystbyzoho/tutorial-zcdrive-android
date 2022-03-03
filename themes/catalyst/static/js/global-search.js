var lunrIndex, pagesIndex;

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Initialize lunrjs using our generated index file
function initLunr() {
    if (!endsWith(baseurl,"/")){
        baseurl = baseurl+'/'
    };

    // First retrieve the index file
    $.getJSON(baseurl +"index.json")
        .done(function(index) {
            pagesIndex =   index;
            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = new lunr.Index
            lunrIndex.ref("uri");
            lunrIndex.field('title', {
                boost: 15
            });
            lunrIndex.field('tags', {
                boost: 10
            });
            lunrIndex.field("content", {
                boost: 5
            });

            // Feed lunr with each file and let lunr actually index them
            pagesIndex.forEach(function(page) {
                lunrIndex.add(page);
            });
            lunrIndex.pipeline.remove(lunrIndex.stemmer)
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index file:", err);
        });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    // Find the item in our index corresponding to the lunr one to have more info
    return lunrIndex.search(query).map(function(result) {
            return pagesIndex.filter(function(page) {
                return page.uri === result.ref;
            })[0];
        });
}

// Let's get started
initLunr();
$( document ).ready(function() {
    var searchList = new globalAutoComplete({
        /* selector for the search box element */
        selector: $("#global-search-by").get(0),
        /* source is the callback to perform the search */
        source: function(term, response) {
            response(search(term));
        },
        /* renderItem displays individual search results */
        renderItem: function(item, term) {
            var numContextWords = 2;
            var text = item.content.match(
                "(?:\\s?(?:[\\w]+)\\s?){0,"+numContextWords+"}" +
                    term+"(?:\\s?(?:[\\w]+)\\s?){0,"+numContextWords+"}");
            item.context = text;
            var url="";
            var path = [];
            path=item.uri.split("/");
            for(var i=1; i<path.length; i++){
                url += path[i];
                if( i+2 < path.length){
                    url += " > ";
                }
            }
            if(item.uri != "/404.html"){
                return  '<div class="global-autocomplete-suggestion" onmouseover="storeSearchContent(this)"' +
                        'data-term="' + term + '" ' +
                        'data-title="' + item.title + '" ' +
                        'data-desc="' + item.description + '" ' +
                        'data-tags="' + item.tags + '" ' +
                        'data-uri="'+ item.uri + '" ' +
                        'data-context="' + item.context + 
                    '">' + 
                        item.title +
                        '<div class="context" style="padding-top: 5px">' + (url || '') + '</div>' +
                    '</div>';
            }else{
                return '';
            }
        },
        /* onSelect callback fires when a search suggestion is chosen */
        onSelect: function(e, term, item) {
            console.log(item.getAttribute('data-val'));
            location.href = item.getAttribute('data-uri');
        }
    });
});

function storeSearchContent(e){
    var array = [];
    var title = e.getAttribute("data-title");
    var desc = e.getAttribute("data-desc");
    var tags = e.getAttribute("data-tags");
    var uri = e.getAttribute("data-uri");
    var page = uri.split("/")[1];

    var toc = document.querySelector("#toc");
    toc.innerHTML="";
    var query = document.querySelector(".right-search-content");
    query.children[0].innerHTML = page+" | "+title;
    var url="",ref="",ref_id="";
    var path = [];
    path=uri.split("/");
    for(var i=1; i<path.length; i++){
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
        if(identity.length > 1){
            var ref_id="";
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