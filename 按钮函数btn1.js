function btn1(val) {
    if (typeof (Storage) !== "undefined") {
        if (document.getElementById('btn01').innerText == "起床") {
            aaa01(val);
            // document.getElementById("btn01").innerHTML = "查看时间";
            document.getElementById("btn02").style.display = "block";
            document.getElementById("btn02").innerHTML = "卫生间";
            document.getElementById("btn03").style.display = "block";
            document.getElementById("btn03").innerHTML = "储藏间";
            document.getElementById("btn04").style.display = "block";
            document.getElementById("btn04").innerHTML = "继续睡觉";
            imath = 0;
            imath2 = 0;
            shuijiao = 0;
            additem("name01");
            document.getElementById("toplace2").style.display = "block";
            namee(namea);
            zhuangtai("zhuangtai1");
            zhuangtaix("zhuangtai2");
            zhuangtai("zhuangtai3");
            fuzhong("fuzhong1");
            fuzhongx("fuzhong2");
            fuzhong("fuzhong3");
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 0) {
            aaa02(val);
            additem("name02");
            imath2 = 1;
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 1 && imath2 != 1) {
            aaa02(val);
            additem("name02");
            imath2 = 1;
        } else if (document.getElementById('btn01').innerText == "查看时间" && imath == 1 && imath2 == 1) {
            aaa02(val);
            additem("name07");
        } else if (document.getElementById('btn01').innerText == "准备牙膏牙刷") {
            aaa04(val);
            additem("name05");
            jiancha = 0;
        } else if (document.getElementById('btn01').innerText == "再次检查" && jiancha < 5 && jiancha >= 0) {
            aaa04(val);
            additem("name05");
            jiancha = jiancha + 1;
        } else if (document.getElementById('btn01').innerText == "再次检查" && jiancha == 5) {
            aaa07(val);
            additem("name08");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha < 7 && jiancha > 5) {
            aaa07(val);
            additem("name09");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha == 7) {
            aaa07(val);
            additem("name10");
            jiancha = jiancha + 1;
            document.getElementById("btn01").innerHTML = "用脚尝试";
        } else if (document.getElementById('btn01').innerText == "用脚尝试" && jiancha == 8) {
            additem("name11");
            document.getElementById("btn01").innerHTML = "脚受伤了";
            document.getElementById("btn01").disabled = true;
        } else if (document.getElementById('btn01').innerText == "进店查看一番") {
            aaa09(val);
            additem("name16");
        } else if (document.getElementById('btn01').innerText == "走到货架后面") {
            aaa10(val);
            additem("name17");
        }
        else if (document.getElementById('btn01').innerText == "离开") {
            additem("name18");
            aaa12();
            document.getElementById("btn01").disabled = true;
        } else if (document.getElementById('btn01').innerText == "两箱方便面") {
            document.getElementById("btn01").innerHTML = "取出一份方便面";
            document.getElementById("btn02").innerHTML = "放回一份方便面";
            document.getElementById("btn03").innerHTML = "返回";
            document.getElementById("btn04").style.display = "none";
            document.getElementById("btn05").style.display = "none";
            document.getElementById("btn06").style.display = "none";
            document.getElementById("btn07").style.display = "none";
            document.getElementById("btn08").style.display = "none";
            document.getElementById("btn02").disabled = true;

        }
        else if (document.getElementById('btn01').innerText == "取出一份方便面") {
            document.getElementById("wupin").style.display = "block";
            fangbianmian();
        }
        else if (document.getElementById('btn01').innerText == "取出一瓶水") {
            document.getElementById("wupin").style.display = "block";
            shui();
        }
        else if (document.getElementById('btn01').innerText == "扯走一个纸袋") {
            document.getElementById("wupin").style.display = "block";
            zhidai();
        }
        else if (document.getElementById('btn01').innerText == "拔出一根杆子") {
            document.getElementById("wupin").style.display = "block";
            ganzi();
        }
        else if (document.getElementById('btn01').innerText == "取出一盒纸巾") {
            document.getElementById("wupin").style.display = "block";
            zhijin();
        }
    }

    else {
        document.getElementById("tongban1").innerHTML = "Sorry, your browser does not support web storage...";
    }

}