function clickHandler(e){
  var set_icon = e.nextElementSibling.children[0];
  if(e.closest("pre").classList.value.includes("shortcode-light")){
    set_icon.style="background: url('/images/DarkPages.svg') no-repeat -514px -29px !important;";
    e.closest("pre").classList.remove("shortcode-light");
    e.closest("pre").classList.add("shortcode-dark");
  }
  else if(e.closest("pre").classList.value.includes("shortcode-dark")){
    set_icon.style="background: url('/images/LightPages.svg') no-repeat -121px -29px !important;";
    e.closest("pre").classList.remove("shortcode-dark");
    e.closest("pre").classList.add("shortcode-light");
  }
  else if(set_icon.classList.value.includes("code-light-icon")){
    set_icon.style="background: url('/images/DarkPages.svg') no-repeat -514px -29px !important;";
    e.closest("pre").classList.remove("shortcode-light");
    e.closest("pre").classList.add("shortcode-dark");
  }
  else if(set_icon.classList.value.includes("code-dark-icon")){
    set_icon.style="background: url('/images/LightPages.svg') no-repeat -514px -29px !important;";
    e.closest("pre").classList.remove("shortcode-dark");
    e.closest("pre").classList.add("shortcode-light");
  }
}

//Panel with Adjustment
function adjustview(e){
  var data = e.innerHTML;
  if(data == "View more"){
    e.innerHTML = "View less";
    e.parentNode.parentNode.querySelector("#view-adjust").style.height="auto";
    e.parentNode.parentNode.querySelector("#view-adjust").classList.remove("fadecontent");
  }
  else{
    e.innerHTML = "View more";
    e.parentNode.parentNode.querySelector("#view-adjust").style.height="150px";
    e.parentNode.parentNode.querySelector("#view-adjust").classList.add("fadecontent");
  }
}

// Auto clear default pre code block
var autoclear = document.querySelectorAll("pre code pre code");
for(var i=0;i<autoclear.length;i++){
    var temp = autoclear[i].innerHTML;
    autoclear[i].parentNode.parentNode.innerHTML = temp;
}