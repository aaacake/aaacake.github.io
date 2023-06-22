function alltextresourcesin() {
    //    localStorage.name01="火堆重新燃烧了起来,木头慢慢减少......";
    //    localStorage.name02="手头没有木头了，也许需要再找一些？"
    localStorage.name01 = "四下无人，与平日大不相同。"
    localStorage.name02 = "已经九点多了。"
    localStorage.name03 = "狗在啃食店主，眼睛发绿。它看到了你，狂吠着冲了过来！"
    localStorage.name04 = "店主倒在地上，有一个日记本半浸在血泊中。"
    localStorage.name05 = "柜台里放着一把匕首，一个铁锤和一个十字架。"
    localStorage.name06 = "匕首锋利的刀刃闪闪发光。"
    localStorage.name07 = "铁锤或许是店主打钉子用的，日后或许用得到它。"
    localStorage.name08 = "虽是老相识，但还真的想不到他是个虔诚的信徒~"
    localStorage.name09 = "店主和你关系不错，找他问问吧。"
    localStorage.name10 = "或许警察能给我一些帮助。"
    localStorage.name11 = "小镇的警卫室是唯一能与城市联系的地方。"
    localStorage.name12 = "桌上放着一张电报。"
    localStorage.name13 = "警察克里斯从地上爬起，血红的眼睛望着你，向你扑来！"
    localStorage.name14 = "再往前走就是集市和农场了，不知道能不能找到一些人。"
    localStorage.name15 = "大多数的店铺都紧紧锁着，只有几家可以进入。"
//    食品店文案
    localStorage.name16 = "食品店里空无一人。"
    localStorage.name17 = "服装店里空无一人。"
}
function additem(i) {
    // 创建 div 元素：
    const para = document.createElement("div-items");
    //根据name取值
    var str = localStorage.getItem(i);
    // 创建文本节点：
    const node = document.createTextNode(str);
    // 把文本节点附加到 p 元素：
    para.appendChild(node);
    // 把 p 元素附加到 id 位置：
    document.getElementById("event").appendChild(para);
}


