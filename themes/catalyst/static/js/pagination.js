var nodelist = document.querySelectorAll("a.file");
var prev=0;
var next=0;
var node,nextparent,prevparent,currparent,currentnode,prevparentType,nextparentType,currparentType;
currparentType = document.querySelector("li.current a.file").closest(".haschildren").getAttribute("type");
if(currparentType == "tutorial-apps"){
    node = document.querySelectorAll("li.current li.current a.file");
    if(node.length > 0){
        currentnode = node[node.length - 1].getAttribute("href");
        currparent = node[node.length - 1].closest(".haschildren").querySelector("a.file").innerT
    }else{
        currentnode = document.querySelector("li.current a.file").getAttribute("href");
        currparent = document.querySelector("li.current a.file").closest(".haschildren").querySelector("a.file").innerText;
    }
}else{
    currentnode = document.querySelector("li.current a.file").getAttribute("href");
    currparent = document.querySelector("li.current a.file").closest(".haschildren").querySelector("a.folder").innerText;
}

for(var itr=0;itr<nodelist.length;itr++){
    if(nodelist[itr].getAttribute("href") == currentnode){
        prev = itr-1;
        next = itr+1;
        if(document.querySelectorAll("a.file")[prev]){
            prevparentType = document.querySelectorAll("a.file")[prev].closest(".haschildren").getAttribute("type");
            if(prevparentType == "tutorial-apps"){
                prevparent = document.querySelectorAll("a.file")[prev].closest(".haschildren").querySelector("a.file").innerText;
            }else{
                prevparent = document.querySelectorAll("a.file")[prev].closest(".haschildren").querySelector("a.folder").innerText;
            }
        }
        if(document.querySelectorAll("a.file")[next]){
            nextparentType = document.querySelectorAll("a.file")[next].closest(".haschildren").getAttribute("type");
            if(nextparentType == "tutorial-apps"){
                nextparent = document.querySelectorAll("a.file")[next].closest(".haschildren").querySelector("a.file").innerText;
            }else{
                nextparent = document.querySelectorAll("a.file")[next].closest(".haschildren").querySelector("a.folder").innerText;
            }
        }
        break;
    }
}

if(document.querySelector("li.current a.file").innerText == "Introduction" && currparentType == "tutorial-apps"){
    var element = document.querySelectorAll("a.file")[next];
    var href = element.getAttribute("href");
    var start = document.querySelector(".previous");
    start.setAttribute("href",href);
}else{
    // Previous Page
    if(currparentType == prevparentType){
        var element = document.querySelectorAll("a.file")[prev];
        var href = element.getAttribute("href");
        var title = element.getAttribute("title");
        prev = document.querySelector(".previous");
        if(prev){
            prev.setAttribute("href",href);
        }
        if(prevparent == currparent || prevparent == "main" || prevparentType == "tutorial-apps"){
            if(prev.nextElementSibling.querySelector(".page-title")){
                prev.nextElementSibling.querySelector(".page-title").innerText=title;
            }
        }else{
            if(prev.nextElementSibling.querySelector(".page-title")){
                prev.nextElementSibling.querySelector(".page-title").innerText=prevparent+" - "+title;
            }
        }
    }
    else{
        document.querySelector(".left-side-pagination").style.visibility="hidden";
    }
    // Next Page  
    if(currparentType == nextparentType){
        var element = document.querySelectorAll("a.file")[next];
        var href = element.getAttribute("href");
        var title = element.getAttribute("title");
        var next_page = document.querySelector(".next");
        if(next_page){
            next_page.setAttribute("href",href);
        }
        if(nextparent == currparent || nextparent == "main" || nextparentType == "tutorial-apps"){
            if(next_page.previousElementSibling.querySelector(".page-title")){
                next_page.previousElementSibling.querySelector(".page-title").innerText=title;
            }
        }else{
            next_page.previousElementSibling.querySelector(".page-title").innerText=nextparent+" - "+title;
        }
    }else{
        document.querySelector(".right-side-pagination").style.visibility="hidden";
    }
}

// Remove Last Pagination for Tutorial
var page = document.querySelector(".right-side-pagination .page-title");
if(page && (page.innerText.length == 0)){
    document.querySelector(".pagination-block.right-side-pagination").style.display="none";
}