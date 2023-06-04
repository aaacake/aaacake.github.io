function toplace1(val) {
    aaa0103(val);
    document.getElementById("btn01").innerHTML = "查看时间";
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
    val.disabled = true;
    document.getElementById("toplace2").disabled = false;
    
}