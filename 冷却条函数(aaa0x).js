var countdown = 3;
function alldisabled() {
    document.getElementById("btn01").disabled = true;
    document.getElementById("btn02").disabled = true;
    document.getElementById("btn03").disabled = true;
    document.getElementById("btn04").disabled = true;
    document.getElementById("btn05").disabled = true;
}
function allabled() {
    document.getElementById("btn01").disabled = false;
    document.getElementById("btn02").disabled = false;
    document.getElementById("btn03").disabled = false;
    document.getElementById("btn04").disabled = false;
    document.getElementById("btn05").disabled = false;
}
function aaa01(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "查看时间";
        allabled();
        countdown = 1;
        // 考虑下一次点击
        abandon = 10;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa01(val)
        }, 1000)
    }
}
function aaa02(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "查看时间";
        allabled();
        countdown = 1;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa02(val)
        }, 1000)
    }
}
function aaa03(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "打开水龙头";
        allabled();
        countdown = 1;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa03(val)
        }, 1000)
    }
}
function aaa04(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "再次检查";
        allabled();
        countdown = 1;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa04(val)
        }, 1000)
    }
}
function aaa07(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "用脚尝试";
        allabled();
        countdown = 3;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa07(val)
        }, 1000)
    }
}
function aaa05(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        document.getElementById("btn02").style.display = "none";
        allabled();
        countdown = 5;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa05(val)
        }, 1000)
    }
}
function aaa06(val) {
    if (abandon == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "继续睡觉";
        allabled();
        countdown = 5;
        abandon = 7;
        imath = 1;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + abandon + ")";
        abandon--;
        setTimeout(function () {
            aaa06(val)
        }, 1000)
    }
}
function aaa07(val) {
    if (time == 0) {
        hideWindow();
        time = 3;
    } else {
        time--;
        setTimeout(function () {
            aaa07(val)
        }, 1000)
    }
}
function aaa08(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "进店查看一番";
        allabled();
        countdown = 5;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa08(val)
        }, 1000)
    }
}
function aaa09(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "走到货架后面";
        allabled();
        countdown = 3;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa09(val)
        }, 1000)
    }
}
function aaa10(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.innerHTML = "战斗中";
        allabled();
        displayWindow(val);
        countdown = 1;
    } else {
        val.setAttribute("disabled", true);
        alldisabled();
        val.innerHTML = "(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            aaa10(val)
        }, 1000)
    }
}