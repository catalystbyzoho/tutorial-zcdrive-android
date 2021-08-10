var blue = ["import ","class ","public ","private ","static ","final ","implements "," new ","void "];
var cement = ["@Override","@SuppressWarnings(“unchecked”)"];
var str;

for( var j=0;j<document.querySelectorAll("code").length;j++){
    str = document.querySelectorAll("code")[i].innerHTML;
    var ar = str.match(/\.(.+?)\(/g);
    if (ar != null){
        for(var j=0;j<ar.length;j++){
            str = document.querySelectorAll("code")[i].innerHTML;
            document.querySelectorAll("code")[i].innerHTML = str.replaceAll(ar[j], `<span style='color: #E24B4B;'>${ar[j]}</span>`);
        }
    }
}

for(var i=0;i<blue.length;i++){
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(blue[i], `<span style='color: var(--font-blue-color);'>${blue[i]}</span>`);
    }
}
for(var i=0;i<cement.length;i++){
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(cement[i], `<span style='color: #909090;'>${cement[i]}</span>`);
    }
}