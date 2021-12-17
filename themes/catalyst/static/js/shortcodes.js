function clickHandler(e){
  var set_icon = e.querySelector(".theme-icon div");
  function themeDarkChange(){
    var themeChange = document.querySelectorAll("pre .theme-icon");
    for(var i=0;i<themeChange.length;i++){
      themeChange[i].children[0].style="background: url('/images/DarkPages.svg') no-repeat -514px -29px !important;";
      themeChange[i].closest("pre").classList.remove("shortcode-light");
      themeChange[i].closest("pre").classList.add("shortcode-dark");
    }
  }
  function themeLightChange(){
    var themeChange = document.querySelectorAll("pre .theme-icon");
    for(var i=0;i<themeChange.length;i++){
      themeChange[i].children[0].style="background: url('/images/LightPages.svg') no-repeat -121px -29px !important;";
      themeChange[i].closest("pre").classList.remove("shortcode-dark");
      themeChange[i].closest("pre").classList.add("shortcode-light");
    }
  }
  if(e.closest("pre").classList.value.includes("shortcode-light")){
    themeDarkChange()
  }
  else if(e.closest("pre").classList.value.includes("shortcode-dark")){
    themeLightChange()
  }
  else if(set_icon.classList.value.includes("code-light-icon")){
    themeDarkChange()
  }
  else if(set_icon.classList.value.includes("code-dark-icon")){
    themeLightChange()
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

//copy to clipboard
function copyToClipboard(ele){
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = ele.closest("pre").querySelector("code").innerText;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  var msg = document.createElement('p');
  msg.classList.add("copied-msg");
  var text = document.createTextNode("Copied");
  msg.appendChild(text);
  ele.after(msg);
	setTimeout(function(){
		document.querySelector(".copied-msg").remove();
	},2500);
}

