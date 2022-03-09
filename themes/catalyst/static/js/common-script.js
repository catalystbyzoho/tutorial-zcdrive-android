// Window onclick function
window.addEventListener("click", function(event) {
  //To close Global Search
  var g_srch = event.srcElement.classList.value.includes("search-modal");
  if(g_srch){
    closeGlobalsearch();
  }
});

// Set Theme at initialSetup
const ls = localStorage.getItem('user-color-scheme');
if(ls == "dark"){
  document.getElementById('slider').checked = true;
  var rep_icon = document.querySelectorAll(".theme-icon");
  for(var i=0;i<rep_icon.length;i++){
    rep_icon[i].children[0].classList.remove("code-light-icon");
    rep_icon[i].children[0].classList.add("code-dark-icon");
  }
}else{
  document.getElementById('slider').checked = false;
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
        if(ele.classList.value.includes("hide-sidebar")){
          ele.classList.remove("hide-sidebar")
          ele.classList.add("show-sidebar");
        }else{
          ele.classList.remove("show-sidebar");
          ele.classList.add("hide-sidebar")
        }
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
        document.getElementById("GlobalSearchResults").style.display="none";
    }

//To Avoid last line in API Template
    var len = document.getElementsByClassName("api-hr").length;
    if(len > 0){
        document.getElementsByClassName("api-hr")[len-1].remove();
    }

// To open and close index faq accordion
    var acc = document.getElementsByClassName("faq-ques");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.parentElement.querySelector(".faq-ans");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        this.parentElement.classList.toggle("active-faq");
      });
    }
    var acc = document.getElementsByClassName("plus-icon");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.parentElement.querySelector(".faq-ans")
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        this.parentElement.classList.toggle("active-faq");
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



  //Whats new
  var initialLoading = function(){
    var input = "All";
    whatsNewTimeline(input);
  }();

  var acc = document.querySelectorAll("div#whatsNewTab.tabs label");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var input = this.getAttribute("tabname");
      whatsNewTimeline(input);
    });
  }

  function whatsNewTimeline(input){
    var year = document.querySelectorAll(`.whatsnew-article .tab#${input} h1`);
    var rmele = document.getElementById("timelines");
    if(rmele){
      rmele.innerHTML="";
    }
    if(year){
      for(var i=0;i<year.length;i++){
        var yr = year[i].innerText.split("-")[0].trim();
        var dt = year[i].innerText.split("-")[1].trim();
        var version = year[i].nextElementSibling.nextElementSibling.innerText;
        var vid = year[i].nextElementSibling.nextElementSibling.getAttribute("ref");
        var present = document.querySelectorAll(`#year${yr}`);
        if(present.length == 0){
          var node = `
            <div class="time-line" id="year${yr}">
              <div class="timeline-block" onclick="openTimeline(${yr})";>
                <div class="timeline-right-icon"></div>
                <p class="year">${yr}</p>
              </div>
              <div class="hide-timeline version-block" id="${vid}">
                <div class="timeline-round-icon"></div>
                <div>
                  <p class="date">${dt}</p>
                  <a href="#${vid}" onclick="activeVersion(this)" class="version">${version}</a>
                </div>
              </div>
            </div>
          `;
          document.getElementById("timelines").innerHTML += node;
        }else{
          document.querySelector(`#year${yr}.time-line`).innerHTML += `
              <div class="hide-timeline version-block" id="${vid}">
                <div class="timeline-round-icon"></div>
                <div>
                  <p class="date">${dt}</p>
                  <a href="#${vid}" onclick="activeVersion(this)" class="version">${version}</a>
                </div>
              </div>
          `;
        }
      }  
      $(document).ready(function(){
        var sectionIds = $(`.tab#${input} .whats-new-container h2`);
        $(document).scroll(function(){
          sectionIds.each(function(){
            var str1 = "#";
            var str2 = $(this).attr('ref');
            var container = str1.concat(str2);
            var str3 = "year";
            var str4 = $(this)[0].previousElementSibling.previousElementSibling.innerText.split("-")[0].trim();
            var year = str3.concat(str4);
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 100 && scrollPosition >= containerOffset - 120){
              removeActiveVersion();
              document.querySelector(`#timelines #${year}`).classList.add("open-timeline");
              document.querySelector(`${container}.version-block`).classList.add("active-version-block");
            } 
          });
        });
      });  
    }   
  }

  function activeVersion(e){
    removeActiveVersion();
    e.closest(".time-line").classList.add("open-timeline");
    e.closest(".version-block").classList.add("active-version-block");
  }

  function openTimeline(yr){
      document.getElementById(`year${yr}`).classList.toggle("open-timeline");
  }

  function removeActiveVersion(){
    var query = document.querySelectorAll(".version-block");
    for(var i=0;i<query.length;i++){
      query[i].classList.remove("active-version-block");
    }
    var toc_query = document.querySelectorAll("#timelines .time-line");
    for(var i=0;i<toc_query.length;i++){
      toc_query[i].classList.remove("open-timeline");
    }
  }

  //Show Sidebar Active Element Always Visible
  var activeElement = document.querySelector("aside li.active");
  if(activeElement){
    var p = activeElement.getBoundingClientRect().top;
    if(p > 700){
        const root = document.querySelector('aside ul');
        root.scrollTo({
          top: p,
          left: 0,
          behavior: 'smooth',
        });
    }
    //For Tutorial
    if(p > 700){
      const root = document.querySelector('aside');
      root.scrollTo({
        top: p,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  //SDK Margin Issue
  if((document.body.getAttribute("type")=="sdk")  || (document.body.getAttribute("type")=="cli")){
    var ele = document.querySelectorAll("article > aside .menu .dd-item.haschildren li");
    for(var i=0;i<ele.length;i++){
      if((window.getComputedStyle(ele[i]).height == '0px')){
        ele[i].style.margin="0px";
      }
    }
  }