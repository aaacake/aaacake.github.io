function alltextresourcesin() {
    //    localStorage.name01="火堆重新燃烧了起来,木头慢慢减少......";
    //    localStorage.name02="手头没有木头了，也许需要再找一些？"
    localStorage.name01 = "缓慢地爬起来，视线有些模糊。"
    localStorage.name02 = "墙上时钟指向九点。"
    localStorage.name03 = "晃晃悠悠地来到了洗手间。"
    localStorage.name04 = "什么也没发生,感到很奇怪。但是不知道出了什么问题，决定下楼去吃点。"
    localStorage.name05 = "牙膏好像用完了。"
    localStorage.name06 = ""
}

function additem(x) {
    // 创建 div 元素：
    const para = document.createElement("div-items");
    //根据name取值 
    var str = localStorage.getItem(x);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("event").appendChild(para);
}