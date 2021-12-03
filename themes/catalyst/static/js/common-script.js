// Set Theme at initialSetup
const ls = localStorage.getItem('user-color-scheme');
var initial_theme_setup = document.getElementById('dark-mode-button');
if(ls == "dark"){
  initial_theme_setup.innerHTML='<div class="dark-icon"></div><div>Dark theme</div>';
  document.getElementById("checkbox-light").checked=false;
  document.getElementById("checkbox-dark").checked=true;
  var rep_icon = document.querySelectorAll(".theme-icon");
  for(var i=0;i<rep_icon.length;i++){
    rep_icon[i].children[0].classList.remove("code-light-icon");
    rep_icon[i].children[0].classList.add("code-dark-icon");
  }
}else{
  initial_theme_setup.innerHTML='<div class="light-icon"></div><div>Light theme</div>';
  document.getElementById("checkbox-light").checked=true;
  document.getElementById("checkbox-dark").checked=false;
  var rep_icon = document.querySelectorAll(".theme-icon");
  for(var i=0;i<rep_icon.length;i++){
    rep_icon[i].children[0].classList.remove("code-dark-icon");
    rep_icon[i].children[0].classList.add("code-light-icon");
  }
}

// To show header dropdown
    function showHeaderDowndown(){
        var ele = document.getElementById("headerMenuList");
        ele.classList.toggle("hide");        
    }

// To show sidebar
    function showSideBar(){
        var ele = document.getElementById("responsiveSidebar");
        ele.classList.toggle("hide-sidebar");  
    }

// Global Search Modal
    function openGlobalsearch(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var val_nul = document.getElementById('global-search-by');
        if(val_nul){
            val_nul.value = '';
        }
    }
    function closeGlobalsearch(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.getElementById("GlobalSearchResults").style.position="";
    }

//To Avoid last line in API Template
    var len = document.getElementsByClassName("api-hr").length;
    if(len > 0){
        document.getElementsByClassName("api-hr")[len-1].remove();
    }

// To open and close index faq accordion
    var acc = document.getElementsByClassName("accordion1");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel1 = this.nextElementSibling;
        if (panel1.style.maxHeight) {
          panel1.style.maxHeight = null;
        } else {
          panel1.style.maxHeight = panel1.scrollHeight + "px";
        } 
      });
    }

// Suggestion script  
    function initialSetup() {
      $(".request-sec").show(), $(".feedback-sec").hide(), $(".reponse-sec").hide()
    }
    
    function submitRating(e) {
      $("[name=was_this_helpful]").val(e), "Yes" === e ? submitFeedback() : ($(".yes-no").hide(), $(".want-feature").hide(), $(".rating-form").addClass("full-width"), $(".feedback-sec").show())
    }
    
    function hideFeedbackSec() {
      $(".yes-no").show(), $(".want-feature").show(), $(".rating-form").removeClass("full-width"), $(".feedback-sec").hide()
    }
    
    function submitFeedback(e) {
      var a = $("[name=was_this_helpful]").val(),
        s = $("#comments").val(),
        i = $("#feedback_email").val();
      $("[name=feedback]").val(s), $("[name=email]").val(i), $("[name=url]").val(location.href), "Yes" !== a && "No" !== a || $("#ratingForm").submit(), $(".request-sec").hide(), $(".reponse-sec").show(), $(".want-feature").show(), $(".rating-form").removeClass("full-width")
    }
    initialSetup();