function btn3(val) {
    if (typeof (Storage) !== "undefined")
        {
        if (document.getElementById('btn03').innerText == "继续睡觉")
            {additem("name06");
            aaa06(val);
            }
    }
    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }}