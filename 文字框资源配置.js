function alltextresourcesin() {
    //    localStorage.name01="火堆重新燃烧了起来,木头慢慢减少......";
    //    localStorage.name02="手头没有木头了，也许需要再找一些？"
    localStorage.name01 = "缓慢地爬起来，视线有些模糊。"
    localStorage.name02 = "墙上时钟指向九点。"
    localStorage.name03 = "晃晃悠悠地来到了洗手间。"
    localStorage.name04 = "什么也没发生,感到很奇怪，但是不知道出了什么问题。下楼去吃点？"
    localStorage.name05 = "牙膏好像用完了。"
    localStorage.name06 = "睡个回笼觉......"
    localStorage.name07 = "墙上时钟依然指向九点，表也许坏了。"
    localStorage.name08 = "哇塞，牙膏貌似出来了一点点。"
    localStorage.name09 = "你抬起脚，狠狠地踩在了牙膏上，不过什么也没发生。"
    localStorage.name10 = "感到脚有些疼痛，牙膏只有绿豆大小，也许应该停止尝试......"
    localStorage.name11 = "脚跟处传来阵阵剧痛。"
    localStorage.name12 = "辗转反侧几次后，感到精力充沛，无法入眠。"
    localStorage.name13 = "你他暖暖的，不要再睡了！！！"
    localStorage.name14 = "精力充沛，就是不肯起床......"
    localStorage.name15 = "房子远离市中心，当地人烟稀少。"
    localStorage.name16 = "门口垃圾凌乱，不过没有在意，进门并没有看到店主。正准备喊几声店主时，却听见了些许动静！"
    localStorage.name17 = "店主的金毛此时正在撕扯着店主！正午的阳光照射充足，狗的眼睛有些发绿。来不及多想，狗扑了过来！！！"
    localStorage.name18 = "这件事情不太正常。"
    localStorage.name19 = "店主直接被封喉致死，看来店主没有防备。"
    localStorage.name20 = "小店除了一具尸体，其他与往常一样，空气很寂静。"
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


