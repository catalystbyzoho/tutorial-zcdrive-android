// Active Link Script
    var activelink = window.location.pathname.split("/")[1];
    if(activelink == "docs"){
        document.getElementById("docs").style.color="var(--font-blue-color)";
        document.getElementById("docs-line").style.backgroundColor="var(--font-blue-color)";
    }
    else if(activelink == "tutorial" || activelink == "tutorial-apps"){
        document.getElementById("tutorial").style.color="var(--font-blue-color)";
        document.getElementById("tutorial-line").style.backgroundColor="var(--font-blue-color)";
    }
    else if(activelink == "faq"){
        document.getElementById("faq").style.color="var(--font-blue-color)";
        document.getElementById("faq-line").style.backgroundColor="var(--font-blue-color)";
    }
    else if(activelink == "whats-new"){
        document.getElementById("whats-new").style.color="var(--font-blue-color)";
        document.getElementById("whats-new-line").style.backgroundColor="var(--font-blue-color)";
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
    }
    function closeGlobalsearch(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
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