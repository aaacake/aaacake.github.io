function btn1(val) {
        if (document.getElementById('btn01').innerText == "苏醒") {
            additem("name01");
            document.getElementById("toplace1").style.display = "block";
//            document.getElementById("wupin").style.display = "block";
            document.getElementById("btn01").innerHTML = "看表";
            document.getElementById("btn02").style.display = "block";
            document.getElementById("btn02").innerHTML = "去五金店问问发生了什么";

        }else if(document.getElementById('btn01').innerText == "推门进入"){
        document.getElementById("btn01").innerHTML = "战斗！";
        document.getElementById("toplace1").innerHTML = "五金店";
        additem("name03");
        }else if(document.getElementById('btn01').innerText == "战斗！"){
        document.getElementById("btn01").innerHTML = "查看店主";
        document.getElementById("btn02").innerHTML = "查看柜台";
        document.getElementById("btn02").style.display = "block";
        }
        else if(document.getElementById('btn01').innerText == "查看店主"){
        document.getElementById("btn01").innerHTML = "查看日记本";
        document.getElementById("btn02").style.display = "none";
        additem("name04");
        }else if(document.getElementById('btn01').innerText == "看表"){
        additem("name02");
        }else if(document.getElementById('btn01').innerText == "拾取匕首"){
        additem("name06");
        }else if(document.getElementById('btn01').innerText == "前往警卫室"){
        document.getElementById("btn01").innerHTML = "进入第一个房间";
        document.getElementById("btn02").style.display = "none";
        document.getElementById("btn03").style.display = "none";
        additem("name11");
        }else if(document.getElementById('btn01').innerText == "进入第一个房间"){
        document.getElementById("btn01").innerHTML = "拾取电报";
        document.getElementById("btn02").innerHTML = "进入第二个房间";
        document.getElementById("btn02").style.display = "block";
        additem("name12");
        }else if(document.getElementById('btn01').innerText == "前往集市"){
        document.getElementById("btn01").innerHTML = "进入服饰店";
        document.getElementById("btn02").innerHTML = "进入食品店";
        additem("name15");
        }else if(document.getElementById('btn01').innerText == "进入农场"){
        document.getElementById("btn01").innerHTML = "查看牛棚";
        }else if(document.getElementById('btn01').innerText == "查看牛棚"){
        document.getElementById("btn01").innerHTML = "寻找劳斯先生";
        }else if(document.getElementById('btn01').innerText == "寻找劳斯先生"){
        document.getElementById("btn01").innerHTML = "羊棚";
        }else if (document.getElementById('btn01').innerText == "查看日记本") {
        document.getElementById("btn01").innerHTML = "查看店主";
        document.getElementById("btn02").innerHTML = "查看柜台";
        document.getElementById("btn02").style.display = "block";
        document.getElementById("btn04").style.display = "none";
        document.getElementById("btn03").style.display = "none";
        }


}





