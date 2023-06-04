function btn5(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn05').innerText == "一箱纸巾" ) {
            document.getElementById("btn01").innerHTML = "取出一盒纸巾";
            document.getElementById("btn02").innerHTML = "放回去一盒纸巾";
            document.getElementById("btn03").innerHTML = "返回";
            document.getElementById("btn04").style.display = "none";
            document.getElementById("btn05").style.display = "none";
            document.getElementById("btn06").style.display = "none";
            document.getElementById("btn07").style.display = "none";
            document.getElementById("btn08").style.display = "none";
            document.getElementById("btn02").disabled = true;

        }

    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}