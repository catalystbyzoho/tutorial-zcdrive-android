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