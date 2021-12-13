//window onscroll function
document.addEventListener("scroll", function(){
    var a = document.querySelector("aside").getBoundingClientRect().height;
    var b = document.getElementById("footerBlock").getBoundingClientRect().top;
    var c;
    if(b < a){
        c = (a-b)+ 130;
        document.querySelector("ul.menu").style=`height: calc(100vh - ${c}px);`;
    }
    else{
        document.querySelector("ul.menu").style=`height: calc(100vh - 130px);`;
    }
});