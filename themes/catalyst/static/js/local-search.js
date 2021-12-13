// Tutorial Search
var tutorial_search = document.getElementById("tutorialLocalSearch");
if(tutorial_search){
    tutorial_search.addEventListener('keyup',tutorialSearchFun);
}
function tutorialSearchFun(){
    var a = document.querySelectorAll(".tutorialSearchFun");
    for(var i=0;i<a.length;i++){
        var val = document.getElementById("tutorialLocalSearch").value.toLowerCase();
        if(a[i].querySelector(".feature-h").innerHTML.toLowerCase().indexOf(val) != -1){
            a[i].style.display="block";
        }else{
            a[i].style.display="none";
        }
    }
}

// FAQ Search
var faq_search = document.getElementById("faqLocalSearch");
if(faq_search){
    faq_search.addEventListener('keyup',faqSearchFun);
}
function faqSearchFun(){
    var a = document.querySelectorAll(".faq-ques");
    for(var i=0;i<a.length;i++){
        var val = document.getElementById("faqLocalSearch").value.toLowerCase();
        if(a[i].innerText.toLowerCase().indexOf(val) != -1){
            a[i].parentElement.style.display="block";
        }else{
            a[i].parentElement.style.display="none";
        }
    }
}