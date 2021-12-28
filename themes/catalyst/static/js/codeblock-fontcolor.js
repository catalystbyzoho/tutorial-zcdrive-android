var blue = ["import ","class ","public ","private ","static ","final ","implements "," new ","void "];
var eq = [" = "];
var str;

for( var i=0;i<document.querySelectorAll("code").length;i++){
    str = document.querySelectorAll("code")[i].innerHTML;
    var get = str.match(/\.(.*?)\(/g);
    if (get != null){
        for(var j=0;j<get.length;j++){
            str = document.querySelectorAll("code")[i].innerHTML;
            document.querySelectorAll("code")[i].innerHTML = str.replaceAll(get[j], `<span style='color: #E24B4B;'>${get[j]}</span>`);
        }
    }
    str = document.querySelectorAll("code")[i].innerHTML;
    var at = str.match(/(\@)([^\n\r]+)/g);
    if (at != null){
        for(var j=0;j<at.length;j++){
            str = document.querySelectorAll("code")[i].innerHTML;
            document.querySelectorAll("code")[i].innerHTML = str.replaceAll(at[j], `<span style='color: #909090;'>${at[j]}</span>`);
        }
    }
    str = document.querySelectorAll("code")[i].innerHTML;
    var sl = str.match(/(\/\/)([^\n\r]+)/g);
    if (sl != null){
        for(var j=0;j<sl.length;j++){
            str = document.querySelectorAll("code")[i].innerHTML;
            document.querySelectorAll("code")[i].innerHTML = str.replaceAll(sl[j], `<span style='color: #909090;'>${sl[j]}</span>`);
        }
    }
    str = document.querySelectorAll("code")[i].innerHTML;
    var ml = str.match(/(\/\*\*)(.|\n)+?(\*\/)/g);
    if (ml != null){
        for(var j=0;j<ml.length;j++){
            str = document.querySelectorAll("code")[i].innerHTML;
            document.querySelectorAll("code")[i].innerHTML = str.replaceAll(ml[j], `<span style='color: #909090;'>${ml[j]}</span>`);
        }
    }
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(blue[i], `<span style='color: var(--font-blue-color);'>${blue[i]}</span>`);
    }
    for( var j=0;j<document.querySelectorAll("code").length;j++){
        str = document.querySelectorAll("code")[j].innerHTML;
        document.querySelectorAll("code")[j].innerHTML = str.replaceAll(eq[i], `<span style='color: #D6B0B0;'>${eq[i]}</span>`);
    }
}
