function btn1(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn01').innerText == "起床") {
            aaa01(val);
            // document.getElementById("btn01").innerHTML = "查看时间";
            document.getElementById("btn02").style.display = "block";
            document.getElementById("btn02").innerHTML = "洗漱";
            document.getElementById("btn03").style.display = "block";
            document.getElementById("btn03").innerHTML = "继续睡觉";
            imath = 0;
            imath2 = 0;
            shuijiao = 0;
            additem("name01");
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 0) {
            aaa02(val);
            additem("name02");
            imath2 = 1;
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 1 && imath2 != 1) {
            aaa02(val);
            additem("name02");
            imath2 = 1;
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 1 && imath2 == 1) {
            aaa02(val);
            additem("name07");
        } else if (document.getElementById('btn01').innerText == "准备牙膏牙刷") {
            aaa04(val);
            additem("name05");
            jiancha = 0;
        } else if (document.getElementById('btn01').innerText == "再次检查" && jiancha != 5) {
            aaa04(val);
            additem("name05");
            jiancha = jiancha + 1;
        } else if (document.getElementById('btn01').innerText == "再次检查" && jiancha == 5) {
            aaa07(val);
            additem("name08");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha == 13) {
            aaa07(val);
            additem("name10");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha != 16) {
            aaa07(val);
            additem("name09");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha == 16) {
            additem("name11");
            document.getElementById("btn01").innerHTML = "脚受伤了";
            document.getElementById("btn01").disabled = true;
        }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }

}