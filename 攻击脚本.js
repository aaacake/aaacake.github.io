function rengou(val){
    if (touzi1 < touzi2 && rengouren == 0 && rengougou == 0) {
        //        玩家获胜
        addfight("ppp01");
        rengouren++;
    } else if (touzi1 < touzi2 && rengouren == 1) {
        addfight("ppp05");
        rengouren++;
    } else if (touzi1 < touzi2 && rengouren == 2) {
        addfight("ppp06");
        rengouren++;
    } else if (touzi1 < touzi2 && rengouren == 3) {
        addfight("ppp07");
        rengouren++;
        document.getElementById("b1").disabled = true;
        //            赢了
        aaa07(val);
    }
    else if (touzi1 == touzi2) {
        addfight("ppp02")
    } else if (touzi1 > touzi2 && rengougou == 0) {
        addfight("ppp03");
        rengougou++;
    } else if (touzi1 > touzi2 && rengougou == 1) {
        addfight("ppp04");
        rengougou++;
    } else if (touzi1 > touzi2 && rengougou == 2) {
        addfight("ppp08");
        rengouren = 0;
        rengougou = 0;
        document.getElementById("b1").disabled = true;
        aaa07(val);
    }
}