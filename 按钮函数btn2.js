function btn2(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn02').innerText == "洗漱") {
            aaa03(val);
            additem("name03");
            document.getElementById("btn01").innerHTML = "准备牙膏牙刷";
            document.getElementById("btn02").innerHTML = "打开水龙头";
        } else if (document.getElementById('btn02').innerText == "打开水龙头") {
            aaa05(val);
            additem("name04");         
        }else if (document.getElementById('btn02').innerText == "关闭水龙头") {
            aaa0501(val);  
        }
        else if (document.getElementById('btn02').innerText == "查看店主") {
            aaa12(val);
            additem("name20");
//            document.getElementById("btn03").disabled = true;
        }else if (document.getElementById('btn02').innerText == "卫生间") {
            aaa0101(val);
            document.getElementById("btn01").innerHTML = "准备牙膏牙刷";
            document.getElementById("btn02").innerHTML = "打开水龙头";
            document.getElementById("btn03").innerHTML = "储藏间";
            document.getElementById("btn04").innerHTML = "主卧";
        }else if (document.getElementById('btn02').innerText == "三箱矿泉水") {
            document.getElementById("btn01").innerHTML = "取出一瓶水";
            document.getElementById("btn02").innerHTML = "放回一瓶水";
            document.getElementById("btn03").innerHTML = "返回";
            document.getElementById("btn04").style.display = "none";
            document.getElementById("btn05").style.display = "none";
            document.getElementById("btn06").style.display = "none";
            document.getElementById("btn07").style.display = "none";
            document.getElementById("btn08").style.display = "none";
            document.getElementById("btn02").disabled = true;

        }
        else if (document.getElementById('btn02').innerText == "放回一份方便面") {
            document.getElementById("wupin").style.display = "block";
            fangbianmian0102();
        }
        else if (document.getElementById('btn02').innerText == "放回一瓶水") {
            document.getElementById("wupin").style.display = "block";
            shui0102();
        }
        else if (document.getElementById('btn02').innerText == "小心地叠回去一个纸袋") {
            document.getElementById("wupin").style.display = "block";
            zhidai0102();
        }
        else if (document.getElementById('btn02').innerText == "插回去一根杆子") {
            document.getElementById("wupin").style.display = "block";
            ganzi0102();
        }
        else if (document.getElementById('btn02').innerText == "放回去一盒纸巾") {
            document.getElementById("wupin").style.display = "block";
            zhijin0102();
        }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

