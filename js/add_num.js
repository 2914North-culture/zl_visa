/**
 * Created by DELL on 2019/11/1.
 */
(function(){
    var oNum_one = document.getElementsByClassName('num1')[0];
    var oNum_two = document.getElementsByClassName('num2')[0];
    var oNum_three = document.getElementsByClassName('num3')[0];
    var oNum_four = document.getElementsByClassName('num4')[0];

    //1
    var num1 = 12217;
    var percentage1 = (18397 - num1)/700;
    setInterval(function(){
        num1+=percentage1;
        if(num1 >= 18398){
            return false;
        }
        else{
            if(num1 >= 10000 && num1 < 100000){
                var tN = String(num1);
                var wan = tN.substr(0,2);
                var wan_behind = tN.substr(2,3);
                oNum_one.innerHTML = wan + ',' + wan_behind;
                return false;
            }
            else if(num1 >= 1000 && num1 < 10000){
                var sN = String(num1);
                //alert(typeof sN);
                var thousand = sN.substr(0,1);
                //alert(typeof thousand);
                var thousand_behind = sN.substr(1,3);
                oNum_one.innerHTML = thousand + ',' + thousand_behind;
                return false;
            }
            oNum_one.innerHTML = num1;
        }
    },1);

    //2
    var num2 = 288;
    var percentage2 = (988 - num2)/700;
    setInterval(function(){
        num2+=percentage2;
        if(num2 >= 989){
            return false;
        }
        else{
            if(num2 >= 10){
                var bN = String(num2);
                var percentage = bN.substr(0,2);
                var percentage_behind = bN.substr(2,1);
                oNum_two.innerHTML = percentage + '.' + percentage_behind + '%';
                return false;
            }
        }
        oNum_two.innerHTML = num2;
    },1);

    //3
    var num3 = 1273;
    var percentage3 = (3273 - num3)/700;
    setInterval(function(){
        num3+=percentage3;
        if(num3 >= 3274){
            return false;
        }
        else{
            if(num3 >= 1000 && num3 < 10000){
                var tN = String(num3);
                var people = tN.substr(0,1);
                var people_behind = tN.substr(1,3);
                oNum_three.innerHTML = people + ',' + people_behind;
                return false;
            }
        }
        oNum_three.innerHTML = num3;
    },1);

    //4
    var num4 = 1;
    setInterval(function(){
        num4++;
        if(num4 >= 101){
            return false;
        }
        else{
            var eN = String(num4);
            oNum_four.innerHTML = eN + '%';
        }

    },33);

})();