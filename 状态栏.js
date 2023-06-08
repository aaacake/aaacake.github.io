function alltextresourcesin3() {
    // 物品质量
    // 方便面:0.1kg
    // 矿泉水:0.6kg
    // 纸袋:0.1kg
    // 金属杆子：2kg
    // 纸巾：0.1kg

    // 玩家状态栏位于物品栏上方，所以我索性把状态栏数据放在这里
    localStorage.playername = "狗蛋"
    localStorage.zhuangtai1 = "健康值:";
    localStorage.zhuangtai2 = "150";
    localStorage.zhuangtai3 = "Hp/";
    localStorage.zhuangtai4 = "150";
    localStorage.zhuangtai5 = "Hp";
    localStorage.fuzhong1 = "负重:";
    localStorage.fuzhong2 = "0";
    localStorage.fuzhong3 = "kg/";
    localStorage.fuzhong4 = "70";
    localStorage.fuzhong5 = "kg";
}

function namee(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = a;
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai1").appendChild(para);
}
function zhuangtai(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai2").appendChild(para);
}
function zhuangtaix(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    para.setAttribute("id", "jiankangzhi");
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai2").appendChild(para);
}
function zhuangtaiy(a) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(a);
    para.setAttribute("id", "jiankangzhiy");
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai2").appendChild(para);
}
function fuzhong(b) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(b);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai3").appendChild(para);
}
function fuzhongx(b) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(b);
    para.setAttribute("id", "zhongliang");
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai3").appendChild(para);
}
function fuzhongy(b) {
    const para = document.createElement("div");
    // para.setAttribute("class", "item");
    //根据name取值
    var str = localStorage.getItem(b);
    para.setAttribute("id", "zhongliangy");
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("zhuangtai3").appendChild(para);
}