function btn2(val) {
     if (document.getElementById('btn02').innerText == "去五金店问问发生了什么") {
         document.getElementById("btn01").innerHTML = "推门进入";
         document.getElementById("btn02").style.display = "none";
         additem("name09")
     }else if(document.getElementById('btn02').innerText == "查看柜台"){
        document.getElementById("btn01").innerHTML = "拾取匕首";
        document.getElementById("btn02").innerHTML = "拾取铁锤";
        document.getElementById("btn03").innerHTML = "拾取十字架";
//        不要重复拾取
        document.getElementById("btn04").style.display = "block";
        document.getElementById("btn04").innerHTML = "返回";
        document.getElementById("btn03").style.display = "block";
        additem("name05");
     }else if(document.getElementById('btn02').innerText == "拾取铁锤"){
     additem("name07");
     }else if(document.getElementById('btn02').innerText == "进入第二个房间"){
        document.getElementById("btn01").innerHTML = "拾取警棍";
        document.getElementById("btn02").innerHTML = "从后门出去";
        document.getElementById("btn01").style.display = "none";
        additem("name13");
     }else if(document.getElementById('btn02').innerText == "继续向前走"){
        document.getElementById("btn01").innerHTML = "前往集市";
        document.getElementById("btn02").innerHTML = "前往农场";
        document.getElementById("btn03").style.display = "none";
        additem("name14");
     }else if(document.getElementById('btn02').innerText == "前往农场"){
        document.getElementById("btn01").innerHTML = "进入农场";
        document.getElementById("btn02").style.display = "none";

     }
}

