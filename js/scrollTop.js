/**
 * Created by DELL on 2019/11/5.
 */
(function(){
    window.onscroll = function(){
        var oTop = document.documentElement.scrollTop;
        var oHeader = document.getElementsByClassName('header')[0];
        //var oMyCarousels = document.getElementsByClassName('myCarousels')[0];
        var oArrow = document.getElementsByClassName('arrow_out')[0];
        var view_Width = window.innerWidth;
        if(view_Width < 768){
            oHeader.style.position = 'static';
            return false;
        }
        else{
            if(oTop > 82.5){
                oHeader.style.position = 'fixed';
                oArrow.style.display = 'block';
            }
            else{
                oHeader.style.position = 'static';
                oArrow.style.display = 'none';
            }
        }

        //function getStyle(obj,attr){
        //    if(obj.currentStyle){
        //        return parseInt(obj.currentStyle[attr]);
        //    }
        //    else{
        //        return parseInt(getComputedStyle(obj,false)[attr]);
        //    }
        //}
    }
})();