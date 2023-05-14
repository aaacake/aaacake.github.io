function btn1(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn01').innerText == "起床") {
            aaa01(val);
            // document.getElementById("btn01").innerHTML = "查看时间";
            document.getElementById("btn02").style.display = "block";
            document.getElementById("btn02").innerHTML = "洗漱";
            additem("name01");
        } else if (document.getElementById('btn01').innerText == "查看时间") {
            aaa02(val);
            additem("name02");
        } else if (document.getElementById('btn01').innerText == "准备牙膏牙刷") {
            aaa04(val);
            additem("name05");
        }else if (document.getElementById('btn01').innerText == "再次检查") {
            aaa04(val);
            additem("name05");
        }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }

}