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

var tutorial_title = document.querySelector("li.current a.file").innerText;
// Previous Page
if(tutorial_title == "Introduction" && currparentType == "tutorial-apps"){
    document.querySelector(".left-side-pagination").style.visibility="hidden";
}
else if(currparentType == prevparentType){
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
if(tutorial_title == "Prerequisites" && currparentType == "tutorial-apps"){
    var element = document.querySelectorAll("a.file")[next];
    var href = element.getAttribute("href");
    var start = document.querySelector(".start");
    start.setAttribute("href",href);
}
else if(currparentType == nextparentType){
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


// Remove Last Pagination for Tutorial
var page = document.querySelector(".right-side-pagination .page-title");
if(page && (page.innerText.length == 0)){
    document.querySelector(".pagination-block.right-side-pagination").style.display="none";
}

// Tutorial status
if(currparentType == "tutorial-apps"){
    var ele,isStep,tutorial_name,tutorial_language,tutorialObject,curr_step,key,is_last,status,tutorial_status,tutorial_detail,tutorial_java,tutorial_nodejs;
    ele = document.querySelector(".dd-item.active.parent.current");
    isStep = ele.querySelector("a.file").previousElementSibling.previousElementSibling;
    tutorial_name = document.querySelectorAll(".ariane li")[2].innerText.trim();
    tutorial_language = document.querySelectorAll(".ariane li")[3].innerText.trim();
    tutorial_java = tutorial_name.replace(/\s/g,'')+"-Java"; 
    tutorial_nodejs = tutorial_name.replace(/\s/g,'')+"-NodeJS"; 
    if(JSON.parse(localStorage.getItem(tutorial_java)) && (JSON.parse(localStorage.getItem(tutorial_java)).status!="completed")){
        document.querySelectorAll("select option")[0].setAttribute("url",JSON.parse(localStorage.getItem(tutorial_java)).current_step);
    }
    if(JSON.parse(localStorage.getItem(tutorial_nodejs)) && (JSON.parse(localStorage.getItem(tutorial_nodejs)).status!="completed")){
        document.querySelectorAll("select option")[1].setAttribute("url",JSON.parse(localStorage.getItem(tutorial_nodejs)).current_step);
    }
    if(isStep && isStep.classList.value == "steps"){
        curr_step = ele.querySelector("a.file").getAttribute("href").trim();
        is_last = document.body.getAttribute("is-last");
        tutorial_detail = tutorial_name.replace(/\s/g,'')+"-"+tutorial_language.replace(/\s/g,''); 
        if(JSON.parse(localStorage.getItem(tutorial_detail))){
            if(is_last || (JSON.parse(localStorage.getItem(tutorial_detail)).status=="completed")){
                tutorialObject = { 'tutorial_name': tutorial_name, 'tutorial_language': tutorial_language, 'status': 'completed'};
            }else{
                tutorialObject = { 'tutorial_name': tutorial_name, 'tutorial_language': tutorial_language, 'status': 'ongoing', 'current_step': curr_step };
            }
        }else{
            if(is_last){
                tutorial_status = "completed";
            }else{
                tutorial_status = "ongoing";
            }
            tutorialObject = { 'tutorial_name': tutorial_name, 'tutorial_language': tutorial_language, 'status': tutorial_status, 'current_step': curr_step };
        }
        localStorage.setItem(tutorial_detail, JSON.stringify(tutorialObject));
    }
}