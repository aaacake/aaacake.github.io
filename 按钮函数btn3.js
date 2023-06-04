function btn3(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao < 5) {
            additem("name06");
            aaa06(val);
            shuijiao = shuijiao + 1;
        } else if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao == 5) {
            additem("name12");
            aaa06(val);
            shuijiao = shuijiao + 1;
        } else if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao < 8 && shuijiao > 5) {
            additem("name14");
            aaa06(val);
            shuijiao = shuijiao + 1;
        } else if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao == 8) {
            additem("name13");
            document.getElementById("btn03").disabled = true;
        }
        else if (document.getElementById('btn03').innerText == "逛一下超市") {
            aaa12(val);
            additem("name19");
        } else if (document.getElementById('btn03').innerText == "储藏间") {
            aaa0102(val);
            document.getElementById("btn01").innerHTML = "两箱方便面";
            document.getElementById("btn02").innerHTML = "三箱矿泉水";
            document.getElementById("btn03").innerHTML = "纸袋";
            document.getElementById("btn04").innerHTML = "金属杆子";
            document.getElementById("btn05").innerHTML = "一箱纸巾";
            document.getElementById("btn06").innerHTML = "卫生间";
            document.getElementById("btn07").innerHTML = "主卧";
            document.getElementById("btn05").style.display = "block";
            document.getElementById("btn06").style.display = "block";
            document.getElementById("btn07").style.display = "block";
        } else if (document.getElementById('btn03').innerText == "纸袋") {
            document.getElementById("btn01").innerHTML = "扯走一个纸袋";
            document.getElementById("btn02").innerHTML = "小心地叠回去一个纸袋";
            document.getElementById("btn03").innerHTML = "返回";
            document.getElementById("btn04").style.display = "none";
            document.getElementById("btn05").style.display = "none";
            document.getElementById("btn06").style.display = "none";
            document.getElementById("btn07").style.display = "none";
            document.getElementById("btn08").style.display = "none";
            document.getElementById("btn02").disabled = true;

        }
        else if (document.getElementById('btn03').innerText == "返回") {
            aaa0102(val);
            document.getElementById("btn01").innerHTML = "两箱方便面";
            document.getElementById("btn02").innerHTML = "三箱矿泉水";
            document.getElementById("btn03").innerHTML = "纸袋";
            document.getElementById("btn04").innerHTML = "金属杆子";
            document.getElementById("btn05").innerHTML = "一箱纸巾";
            document.getElementById("btn06").innerHTML = "卫生间";
            document.getElementById("btn07").innerHTML = "主卧";
            document.getElementById("btn04").style.display = "block";
            document.getElementById("btn05").style.display = "block";
            document.getElementById("btn06").style.display = "block";
            document.getElementById("btn07").style.display = "block";
        }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}