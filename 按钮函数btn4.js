function btn4(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn04').innerText == "金属杆子" ) {
            document.getElementById("btn01").innerHTML = "拔出一根杆子";
            document.getElementById("btn02").innerHTML = "插回去一根杆子";
            document.getElementById("btn03").innerHTML = "返回";
            document.getElementById("btn04").style.display = "none";
            document.getElementById("btn05").style.display = "none";
            document.getElementById("btn06").style.display = "none";
            document.getElementById("btn07").style.display = "none";
            document.getElementById("btn08").style.display = "none";
            document.getElementById("btn02").disabled = true;

        }else if (document.getElementById('btn04').innerText == "主卧") {
            aaa0101(val);
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

    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
