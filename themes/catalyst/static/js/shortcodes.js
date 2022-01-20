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
function adjustview(e,type){
  var pre_tag = e.closest("pre");
  var data = pre_tag.querySelector(".adjust-button");
  if(data.innerText == "View more"){
    data.innerHTML = "View less";
    data.parentNode.parentNode.querySelector("#view-adjust").style.height="auto";
    data.parentNode.parentNode.querySelector("#view-adjust").classList.remove("fadecontent");
  }
  else{
    if(type == "btn"){
      pre_tag.querySelector(".panel-body").scrollTo({top: 0, behavior: "auto"});
      data.innerHTML = "View more";
      data.parentNode.parentNode.querySelector("#view-adjust").style.height="";
      data.parentNode.parentNode.querySelector("#view-adjust").classList.add("fadecontent");
    }
  }
}


//Open Import
function openImport(e){
  var panel = e.closest("pre").querySelector(".panel-body");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.padding="0px 0px 0px 14px";
    panel.style.borderTop="none";
  } else {
    panel.style.maxHeight = (panel.scrollHeight+15) + "px";
    panel.style.padding="0px 0px 16px 14px";
    panel.style.borderTop="1px solid";
  } 
  var cls = e.closest("pre").querySelector("#import-icon").classList;
  if(cls.value.includes("expand-close-icon")){
    cls.remove("expand-close-icon");
    cls.add("expand-open-icon");
  }else{
    cls.add("expand-close-icon");
    cls.remove("expand-open-icon");
  }
}

//Table show props
var tabProps = document.getElementsByClassName("table-props");
var i;
for (i = 0; i < tabProps.length; i++) {
  tabProps[i].addEventListener("click", function() {
    var ele = this.closest("tr").nextElementSibling.classList.toggle("hide-table-props");
    if(ele){
      this.innerText="Show properties";
    }else{
      this.innerText="Hide properties";
    }
  });
}


//copy to clipboard
function copyToClipboard(ele){
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  var text = ele.closest("pre").querySelector("code").innerText.trim();
  dummy.value = text.replace(/[\t\r\n]{1,}/g, "\n");
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

// Auto clear default pre code block

var autoclear = document.querySelectorAll("pre code pre code");
for(var i=0;i<autoclear.length;i++){
    var temp = autoclear[i].innerHTML;
    autoclear[i].parentNode.parentNode.innerHTML = temp;
}
var autoclear = document.querySelectorAll("code p");
for(var i=0;i<autoclear.length;i++){
    var temp = autoclear[i].innerHTML;
    autoclear[i].parentNode.innerHTML = temp;
    autoclear[i].remove();
}