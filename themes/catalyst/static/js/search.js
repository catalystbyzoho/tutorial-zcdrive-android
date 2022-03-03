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
    var searchList = new autoComplete({
        /* selector for the search box element */
        selector: $("#search-by").get(0),
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
            var type = document.body.getAttribute("type");
            if(type == "help"){
                if(item.type == "help" && url !=""){
                    return '<div class="autocomplete-suggestion" ' +
                        'data-term="' + term + '" ' +
                        'data-title="' + item.title + '" ' +
                        'data-uri="'+ item.uri + '" ' +
                        'data-context="' + item.context + '">' +
                        item.title +
                        '<div class="context" style="padding-top: 5px">' +
                        (url || '') +'</div>' +
                        '</div>';
                }else{
                    return '';
                }
            }else if(type == "sdk" || type == "cli"){
                var link= document.body.getAttribute("linktitle");
                if(item.linktitle == link  && url !=""){
                    return '<div class="autocomplete-suggestion" ' +
                        'data-term="' + term + '" ' +
                        'data-title="' + item.title + '" ' +
                        'data-uri="'+ item.uri + '" ' +
                        'data-context="' + item.context + '">' +
                        item.title +
                        '<div class="context" style="padding-top: 5px">' +
                        (url || '') +'</div>' +
                        '</div>';
                }else{
                    return '';
                }
            }else if(type == "api"){
                if(item.type == "api" && url !=""){
                    return '<div class="autocomplete-suggestion" ' +
                        'data-term="' + term + '" ' +
                        'data-title="' + item.title + '" ' +
                        'data-uri="'+ item.uri + '" ' +
                        'data-context="' + item.context + '">' +
                        item.title +
                        '<div class="context" style="padding-top: 5px">' +
                        (url || '') +'</div>' +
                        '</div>';
                }else{
                    return '';
                }
            }
        },
        /* onSelect callback fires when a search suggestion is chosen */
        onSelect: function(e, term, item) {
            console.log(item.getAttribute('data-val'));
            location.href = item.getAttribute('data-uri');
        }
    });
});