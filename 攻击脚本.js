function rengou(val) {
    if (touzi1 < touzi2 && rengouren == 0) {
        //        玩家获胜
        jiancha();
        addfight("ppp01");
        rengouren++;

    } else if (touzi1 < touzi2 && rengouren == 1) {
    jiancha();
        addfight("ppp05");
        rengouren++;
    } else if (touzi1 < touzi2 && rengouren == 2) {
    jiancha();
        addfight("ppp06");
        rengouren++;
    } else if (touzi1 < touzi2 && rengouren == 3) {
    jiancha();
        addfight("ppp07");
        rengouren++;
        document.getElementById("b1").disabled = true;
        //            赢了
        aaa07(val);
        document.getElementById("btn01").innerHTML = "离开";
        document.getElementById("btn02").style.display = "block";
        document.getElementById("btn02").innerHTML = "查看店主";
        document.getElementById("btn03").style.display = "block";
        document.getElementById("btn03").innerHTML = "逛一下超市";
    }
    else if (touzi1 == touzi2) {
    jiancha();
        addfight("ppp02");    
    } else if (touzi1 > touzi2 && rengougou == 0) {
    jiancha();
        addfight("ppp03");
        localStorage.zhuangtai2 = (Number(localStorage.zhuangtai2) - 20).toFixed(1);
        document.getElementById("jiankangzhi").innerHTML = localStorage.zhuangtai2;
        rengougou++;
    } else if (touzi1 > touzi2 && rengougou == 1) {
    jiancha();
        addfight("ppp04");
        localStorage.zhuangtai2 = (Number(localStorage.zhuangtai2) - 50).toFixed(1);
        document.getElementById("jiankangzhi").innerHTML = localStorage.zhuangtai2;
        rengougou++;
    } else if (touzi1 > touzi2 && rengougou == 2) {
    jiancha();
        addfight("ppp08");
        localStorage.zhuangtai2 = (Number(localStorage.zhuangtai2) - 100).toFixed(1);
        document.getElementById("jiankangzhi").innerHTML = localStorage.zhuangtai2;
        rengouren = 0;
        rengougou = 0;
        document.getElementById("b1").disabled = true;
        aaa07(val);
    }
}
//每次战斗都会涉及到一下的判定：玩家是否点击各个按钮
function jiancha(){
    paochu();
}
function paochu(){
    if(Number(localStorage.thing0101)>0 && number01 > 0){document.getElementById("b1").innerHTML = "扔出方便面";}
    if(Number(localStorage.thing0201)>0 && number02 > 0){document.getElementById("b2").innerHTML = "扔出矿泉水";}
    if(Number(localStorage.thing0301)>0 && number03 > 0){document.getElementById("b3").innerHTML = "扔出纸袋";}
    if(Number(localStorage.thing0401)>0 && number04 > 0){document.getElementById("b4").innerHTML = "扔出金属杆子";}
    if(Number(localStorage.thing0501)>0 && number05 > 0){document.getElementById("b5").innerHTML = "扔出纸巾";}
}