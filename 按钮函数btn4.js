function btn4(val) {
    if (document.getElementById('btn04').innerText == "返回") {
    document.getElementById("btn01").innerHTML = "前往警卫室";
    document.getElementById("btn02").innerHTML = "继续向前走";

    document.getElementById("btn02").style.display = "block";
    document.getElementById("btn03").innerHTML = "查看店主";
    document.getElementById("btn03").style.display = "block";
    document.getElementById("btn04").style.display = "none";

    additem("name10");
    }
}
