function hideWindow() {
    document.getElementById("window").style.display = "none";
    document.getElementById("shadow").style.display = "none";
    document.getElementById("enemy").innerHTML = "";
    document.getElementById("player").innerHTML = "";
    document.getElementById("progress").innerHTML = "";
    document.getElementById("progresse").innerHTML = "";
    document.getElementById("zhandou").innerHTML = "";
    document.getElementById("wenzi").innerHTML = "";
    document.getElementById("fight").innerHTML = "";
}
function alltextresourcesin1() {
    localStorage.player00 = "惊慌失措的你:"
    localStorage.player01 = "血量:较低;"

    localStorage.player02 = "强度0~5"

    //00 敌对生物名字
    //01 血量
    //02 物伤
    //03 物抗
    //04 强度

    //    看上去不大对劲的凶狗 eee01
    localStorage.enemy0100 = "看上去不大对劲的凶狗:"
    localStorage.enemy0101 = "血量:较低;"
    localStorage.enemy0102 = "强度:1~2"

    //    其他数据提前配置
    numb = 0;
    numbp = 0;
    suiji = 4;
    zhandou = 2;
    time = 3;
    localStorage.suijif = "战斗！"
    rengouren = 0;
    rengougou = 0;



    //  战斗资源
    localStorage.ppp01 = "脚重重踢在了野狗身上，野狗吃痛。"
    localStorage.ppp02 = "大眼瞪小眼ing"
    localStorage.ppp03 = "狗狗咬了你的腿，暂时没有痛觉"
    localStorage.ppp04 = "狗狗见你虚的跟细狗一样，又悄咪咪地贴过来咬了一口，右小腿感到剧痛"
    localStorage.ppp05 = "你乘胜追击，又一脚踢向凶狗，但是踢偏了（悲）"
    localStorage.ppp06 = "又一脚踢向凶狗，但是又没踹到（大悲）"
    localStorage.ppp07 = "你有点急了，右手向狗一顿乱砸，狗狗被你砸晕了"
    localStorage.ppp08 = "你重心不稳，一下倒在了地上，迷糊间狗狗咬在脖子处，意识模糊..."

}
function addenemy(x) {
    // 创建 div 元素：
    const para = document.createElement("div");
    //根据name取值
    var str = localStorage.getItem(x);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("enemy").appendChild(para);
}

function eee01(val) {
    if (numb == 4) {
        numb = 0;
    } else if (numb == 0) {
        addenemy("enemy0100");
        numb++;
        setTimeout(function () {
            eee01(val)
        }, 1000)
    } else if (numb == 1) {
        addenemy("enemy0101");
        numb++;
        setTimeout(function () {
            eee01(val)
        }, 1000)
    } else if (numb == 2) {
        addenemy("enemy0102");
        numb++;
        setTimeout(function () {
            eee01(val)
        }, 1000)
    }
}

function addplayer(p) {
    // 创建 div 元素：
    const parap = document.createElement("div");
    //根据name取值
    var strp = localStorage.getItem(p);
    // 创建文本节点：
    const nodep = document.createTextNode(strp);
    // 把文本节点附加到 p 元素：
    parap.appendChild(nodep);
    // 把 p 元素附加到 id 位置：
    document.getElementById("player").appendChild(parap);
}
function playeritem(val) {
    if (numbp == 4) {
        numbp = 0;
        suiji = 0;
    } else if (numbp == 0) {
        addplayer("player00");
        numbp++;
        setTimeout(function () {
            playeritem(val)
        }, 1000)
    } else if (numbp == 1) {
        addplayer("player01");
        numbp++;
        setTimeout(function () {
            playeritem(val)
        }, 1000)
    } else if (numbp == 2) {
        addplayer("player02");
        numbp++;
        setTimeout(function () {
            playeritem(val)
        }, 1000)
    }
}

function addsuiji(y) {
    // 创建 div 元素：
    const paray = document.createElement("div");
    //根据name取值
    var stry = localStorage.getItem(y);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("progress").appendChild(paray);
}
function addsuijif(yy) {
    // 创建 div 元素：
    const parayy = document.createElement("button");
    parayy.setAttribute("id", "b1");
    parayy.setAttribute("onclick", "touzi(this,2,5)");
    //根据name取值
    var stryy = localStorage.getItem(yy);
    // 创建文本节点：
    const nodeyy = document.createTextNode(stryy);
    // 把文本节点附加到 p 元素：
    parayy.appendChild(nodeyy);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhandou").appendChild(parayy);
}
function suijif(val, suiji1, suiji2) {
    if (suiji == 0) {
        localStorage.sui1 = suiji1;
        localStorage.sui2 = suiji2;
        //        目前为止手动添加两个传参
        addsuiji("sui1");
        addsuiji("sui2");
        addsuijif("suijif");
        // document.getElementById("b1").onclick = touzi(val,2,2);
        suiji = 4;
    } else {
        suiji--;
        setTimeout(function () {
            suijif(val, suiji1, suiji2)
        }, 1000)
    }
}

function addsuiji2(yyy) {
    // 创建 div 元素：
    const parayyy = document.createElement("div");
    //根据name取值
    // 创建文本节点：
    const nodeyyy = document.createTextNode(yyy);
    // 把文本节点附加到 p 元素：
    parayyy.appendChild(nodeyyy);
    // 把 p 元素附加到 id 位置：
    document.getElementById("progresse").appendChild(parayyy);
}
function addfight(fi) {
    // 创建 div 元素：
    const paraf = document.createElement("div");
    //根据name取值
    var strf = localStorage.getItem(fi);
    // 创建文本节点：
    const nodef = document.createTextNode(strf);
    // 把文本节点附加到 p 元素：
    paraf.appendChild(nodef);
    // 把 p 元素附加到 id 位置：
    document.getElementById("fight").appendChild(paraf);
}
function touzi(val, ss, sss) {
    document.getElementById("progresse").innerHTML = "";
    touzi1 = Math.floor(Math.random() * (ss)) + 1;
    touzi2 = Math.floor(Math.random() * (sss));
    addsuiji2(touzi1);
    addsuiji2(touzi2);
    zhandou = 1;
    rengou(val);
    aaa11(val);

}


