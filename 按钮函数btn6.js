function btn6(val) {
    if (document.getElementById('btn06').innerText == "储藏间") {
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
    } else if (document.getElementById('btn06').innerText == "卫生间") {
        aaa0101(val);
        document.getElementById("btn01").innerHTML = "准备牙膏牙刷";
        document.getElementById("btn02").innerHTML = "打开水龙头";
        document.getElementById("btn03").innerHTML = "储藏间";
        document.getElementById("btn04").innerHTML = "主卧";
        document.getElementById("btn05").style.display = "none";
        document.getElementById("btn06").style.display = "none";
        document.getElementById("btn07").style.display = "none";
        document.getElementById("btn02").disabled = true;

    }


    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}