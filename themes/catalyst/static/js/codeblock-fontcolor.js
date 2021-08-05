var blue = ["import ","class ","public ","private ","static ","final ","implements "," new ","void "];
var red = ["getLogger","getName"];
var cement = ["@Override","@SuppressWarnings(“unchecked”)"];
var str;
for(var i=0;i<blue.length;i++){
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(blue[i], `<span style='color: var(--font-blue-color);'>${blue[i]}</span>`);
    }
}
for(var i=0;i<red.length;i++){
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(red[i], `<span style='color: #E24B4B;'>${red[i]}</span>`);
    }
}
for(var i=0;i<red.length;i++){
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(cement[i], `<span style='color: #909090;'>${cement[i]}</span>`);
    }
}