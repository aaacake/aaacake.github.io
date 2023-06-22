function btn3(val) {
    if(document.getElementById('btn03').innerText == "拾取十字架"){
     additem("name08");
     }else if(document.getElementById('btn03').innerText == "查看店主"){
        document.getElementById("btn01").innerHTML = "查看日记本";
        document.getElementById("btn02").style.display = "none";
        document.getElementById("btn03").style.display = "none";
        additem("name04");
        }
}