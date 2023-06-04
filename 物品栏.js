// function famu() {
//    if (typeof (Storage) !== "undefined") {
//        if (localStorage.clickcount && localStorage.clickcount > 0) {
//            // 点击使数值变化
//            localStorage.clickcount = Number(localStorage.clickcount) - 1;
//            additem("name01");
//        } else {
//            localStorage.clickcount = 0;
//            additem("name02");
//        }
//        document.getElementById("mutou").innerHTML = localStorage.clickcount;

//    } else {
//        document.getElementById("mutou").innerHTML = "Sorry, your browser does not support web storage...";
//    }
// }
function alltextresourcesin2() {
    localStorage.thing01 = "方便面"
    localStorage.thing0101 = "1"
    localStorage.thing02 = "矿泉水"
    localStorage.thing0201 = "1"
    localStorage.thing03 = "纸袋"
    localStorage.thing0301 = "1"
    localStorage.thing04 = "金属杆"
    localStorage.thing0401 = "1"
    localStorage.thing05 = "纸巾"
    localStorage.thing0501 = "1"
    number01 = 0;
    number02 = 0;
    number03 = 0;
    number04 = 0;
    number05 = 0;
}
function fangbianmian01(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main01").appendChild(para);
}
function fangbianmian0101(a) {
    const paray = document.createElement("div");
    paray.setAttribute("id", "number01");
    //根据name取值
    var stry = localStorage.getItem(a);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main01").appendChild(paray);
}
function fangbianmian() {
    if (localStorage.thing0101 >= 0 && number01 > 0) {
        // 点击使数值变化
        localStorage.thing0101 = Number(localStorage.thing0101) + 1;
        document.getElementById("number01").innerHTML = localStorage.thing0101;
        document.getElementById("btn02").disabled = false;
    } else if(localStorage.thing0101 > 0 && number01 == 0){
        const para = document.createElement("div");
        para.setAttribute("id", "main01");
        para.setAttribute("style", "display:flex;flex:1;justify-content: space-around");
        document.getElementById("playerthings").appendChild(para);
        fangbianmian01("thing01");
        fangbianmian0101("thing0101");
        number01++;
        
    }
}
function fangbianmian0102() {
    if (localStorage.thing0101 > 0) {
        // 点击使数值变化
        localStorage.thing0101 = Number(localStorage.thing0101) - 1;
        document.getElementById("number01").innerHTML = localStorage.thing0101;
        if (localStorage.thing0101 == 0) {
            document.getElementById("btn02").disabled = true;
            
        }
    }
}
function shui01(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main02").appendChild(para);
}
function shui0101(a) {
    const paray = document.createElement("div");
    paray.setAttribute("id", "number02");
    //根据name取值
    var stry = localStorage.getItem(a);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main02").appendChild(paray);
}
function shui() {
    if (localStorage.thing0201 >= 0 && number02 > 0) {
        // 点击使数值变化
        localStorage.thing0201 = Number(localStorage.thing0201) + 1;
        document.getElementById("number02").innerHTML = localStorage.thing0201;
        document.getElementById("btn02").disabled = false;
    } else if(localStorage.thing0201 > 0 && number02 == 0){
        const para = document.createElement("div");
        para.setAttribute("id", "main02");
        para.setAttribute("style", "display:flex;flex:1;justify-content: space-around");
        document.getElementById("playerthings").appendChild(para);
        shui01("thing02");
        shui0101("thing0201");
        number02++;
    }
}
function shui0102() {
    if (localStorage.thing0201 > 0) {
        // 点击使数值变化
        localStorage.thing0201 = Number(localStorage.thing0201) - 1;
        document.getElementById("number02").innerHTML = localStorage.thing0201;
        if (localStorage.thing0201 == 0) {
            document.getElementById("btn02").disabled = true;
            
        }
    }
}
function zhidai01(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main03").appendChild(para);
}
function zhidai0101(a) {
    const paray = document.createElement("div");
    paray.setAttribute("id", "number03");
    //根据name取值
    var stry = localStorage.getItem(a);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main03").appendChild(paray);
}
function zhidai() {
    if (localStorage.thing0301 >= 0 && number03 > 0) {
        // 点击使数值变化
        localStorage.thing0301 = Number(localStorage.thing0301) + 1;
        document.getElementById("number03").innerHTML = localStorage.thing0301;
        document.getElementById("btn02").disabled = false;
    } else if(localStorage.thing0301 > 0 && number03 == 0){
        const para = document.createElement("div");
        para.setAttribute("id", "main03");
        para.setAttribute("style", "display:flex;flex:1;justify-content: space-around");
        document.getElementById("playerthings").appendChild(para);
        zhidai01("thing03");
        zhidai0101("thing0301");
        number03++;
    }
}
function zhidai0102() {
    if (localStorage.thing0301 > 0) {
        // 点击使数值变化
        localStorage.thing0301 = Number(localStorage.thing0301) - 1;
        document.getElementById("number03").innerHTML = localStorage.thing0301;
        if (localStorage.thing0301 == 0) {
            document.getElementById("btn02").disabled = true;
            
        }
    }
}
function ganzi01(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main04").appendChild(para);
}
function ganzi0101(a) {
    const paray = document.createElement("div");
    paray.setAttribute("id", "number04");
    //根据name取值
    var stry = localStorage.getItem(a);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main04").appendChild(paray);
}
function ganzi() {
    if (localStorage.thing0401 >= 0 && number04 > 0) {
        // 点击使数值变化
        localStorage.thing0401 = Number(localStorage.thing0401) + 1;
        document.getElementById("number04").innerHTML = localStorage.thing0401;
        document.getElementById("btn02").disabled = false;
    } else if(localStorage.thing0401 > 0 && number04 == 0){
        const para = document.createElement("div");
        para.setAttribute("id", "main04");
        para.setAttribute("style", "display:flex;flex:1;justify-content: space-around");
        document.getElementById("playerthings").appendChild(para);
        ganzi01("thing04");
        ganzi0101("thing0401");
        number04++;
    }
}
function ganzi0102() {
    if (localStorage.thing0401 > 0) {
        // 点击使数值变化
        localStorage.thing0401 = Number(localStorage.thing0401) - 1;
        document.getElementById("number04").innerHTML = localStorage.thing0401;
        if (localStorage.thing0401 == 0) {
            document.getElementById("btn02").disabled = true;
            
        }
    }
}
function zhijin01(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main05").appendChild(para);
}
function zhijin0101(a) {
    const paray = document.createElement("div");
    paray.setAttribute("id", "number05");
    //根据name取值
    var stry = localStorage.getItem(a);
    // 创建文本节点：
    const nodey = document.createTextNode(stry);
    // 把文本节点附加到 p 元素：
    paray.appendChild(nodey);
    // 把 p 元素附加到 id 位置：
    document.getElementById("main05").appendChild(paray);
}
function zhijin() {
    if (localStorage.thing0501 >= 0 && number05 > 0) {
        // 点击使数值变化
        localStorage.thing0501 = Number(localStorage.thing0501) + 1;
        document.getElementById("number05").innerHTML = localStorage.thing0501;
        document.getElementById("btn02").disabled = false;
    } else if(localStorage.thing0501 > 0 && number05 == 0){
        const para = document.createElement("div");
        para.setAttribute("id", "main05");
        para.setAttribute("style", "display:flex;flex:1;justify-content: space-around");
        document.getElementById("playerthings").appendChild(para);
        zhijin01("thing05");
        zhijin0101("thing0501");
        number05++;
    }
}
function zhijin0102() {
    if (localStorage.thing0501 > 0) {
        // 点击使数值变化
        localStorage.thing0501 = Number(localStorage.thing0501) - 1;
        document.getElementById("number05").innerHTML = localStorage.thing0501;
        if (localStorage.thing0501 == 0) {
            document.getElementById("btn02").disabled = true;
            
        }
    }
}


