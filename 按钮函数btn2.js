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
            document.getElementById("btn01").innerHTML = "出门";
        }

    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

