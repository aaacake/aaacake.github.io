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
        }else if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao < 8 && shuijiao > 5) {
            additem("name14");
            aaa06(val);
            shuijiao = shuijiao + 1;
        } else if (document.getElementById('btn03').innerText == "继续睡觉" && shuijiao == 8) {
            additem("name13");
            document.getElementById("btn03").disabled = true;
        }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}