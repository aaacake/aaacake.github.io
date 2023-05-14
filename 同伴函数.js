function allflushed() {
    document.getElementById("001").innerHTML = "牧师";
    document.getElementById("002").innerHTML = "制造师";
    document.getElementById("003").innerHTML = "畜牧人";
    document.getElementById("004").innerHTML = "老木匠";
    document.getElementById("005").innerHTML = "捕鱼大师";
    document.getElementById("tongban01").style.display = "block";
    document.getElementById("tongban02").style.display = "block";
    document.getElementById("tongban03").style.display = "block";
    document.getElementById("tongban04").style.display = "block";
    document.getElementById("05").style.display = "block";
}
function hudong1() {
    if (typeof (Storage) !== "undefined") {
        localStorage.tongban = 1;
        if (document.getElementById('001').innerText == "牧师") {
            document.getElementById("001").innerHTML = "祈祷";
            document.getElementById("002").innerHTML = "包扎";
            document.getElementById("003").innerHTML = "离开";
            document.getElementById("004").innerHTML = "驱逐";
            document.getElementById("05").style.display = "none";
        }

    } else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function hudong2() {
    if (typeof (Storage) !== "undefined") {
        localStorage.tongban = 2;
        if (document.getElementById('002').innerText == "离开") {
            allflushed()
        } else {
            if (document.getElementById('002').innerText == "制造师") {
                document.getElementById("001").innerHTML = "石制工具";
                document.getElementById("002").innerHTML = "铁制工具";
                document.getElementById("003").innerHTML = "弓箭";
                document.getElementById("004").innerHTML = "箭矢";
                document.getElementById("005").innerHTML = "老式栓动步枪";
                document.getElementById("05").style.display = "block";
                document.getElementById("06").style.display = "block";
                document.getElementById("07").style.display = "block";
                document.getElementById("08").style.display = "block";
            }
        }
    } else {
        document.getElementById("tongban2").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function hudong3() {
    if (typeof (Storage) !== "undefined") {
        localStorage.tongban = 3;
        if (document.getElementById('003').innerText == "离开") {
            allflushed()
        } else if (document.getElementById('003').innerText == "畜牧人") {
            document.getElementById("001").innerHTML = "放牛马";
            document.getElementById("002").innerHTML = "离开";
            document.getElementById("003").innerHTML = "驱逐";
            document.getElementById("tongban04").style.display = "none";
            document.getElementById("05").style.display = "none";
        }
    } else {
        document.getElementById("tongban3").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function hudong4() {
    if (typeof (Storage) !== "undefined") {
        localStorage.tongban = 4;
        if (document.getElementById('004').innerText == "老木匠") {
            document.getElementById("001").innerHTML = "加固庇护所";
            document.getElementById("002").innerHTML = "离开";
            document.getElementById("003").innerHTML = "驱逐";
            document.getElementById("tongban04").style.display = "none";
            document.getElementById("05").style.display = "none";
        }
    } else {
        document.getElementById("tongban4").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function hudong5() {
    if (typeof (Storage) !== "undefined") {
        localStorage.tongban = 5;
        if (document.getElementById('005').innerText == "捕鱼大师") {
            document.getElementById("001").innerHTML = "“钓鱼”";
            document.getElementById("002").innerHTML = "离开";
            document.getElementById("003").innerHTML = "驱逐";
            document.getElementById("tongban04").style.display = "none";
            document.getElementById("05").style.display = "none";
        }
    } else {
        document.getElementById("tongban5").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function hudong7() {
    if (typeof (Storage) !== "undefined") {

        if (document.getElementById('007').innerText == "离开") {
            allflushed()
            document.getElementById("06").style.display = "none";
            document.getElementById("07").style.display = "none";
            document.getElementById("08").style.display = "none";
        }
    }
    else {
        document.getElementById("07").innerHTML = "Sorry, your browser does not support web storage...";
    }

}
