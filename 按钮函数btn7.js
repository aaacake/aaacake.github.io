function btn7(val) {
    if (document.getElementById('btn07').innerText == "主卧") {
        aaa01(val);
        // document.getElementById("btn01").innerHTML = "查看时间";
        document.getElementById("btn02").style.display = "block";
        document.getElementById("btn02").innerHTML = "卫生间";
        document.getElementById("btn03").style.display = "block";
        document.getElementById("btn03").innerHTML = "储藏间";
        document.getElementById("btn04").style.display = "block";
        document.getElementById("btn04").innerHTML = "继续睡觉";
        document.getElementById("btn05").style.display = "none";
        document.getElementById("btn06").style.display = "none";
        document.getElementById("btn07").style.display = "none";
        document.getElementById("btn08").style.display = "none";
        document.getElementById("toplace2").style.display = "block";
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}