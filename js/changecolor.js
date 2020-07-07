/**
 * Created by DELL on 2019/11/5.
 */
(function(){
    var oAd_Div = document.getElementsByClassName('ad_div');
    for(var i = 0; i < oAd_Div.length; i++){
        oAd_Div[i].ad_Click = true;
        oAd_Div[i].onclick = function(){

            var this_text = this.getElementsByClassName('son');
            if(this.ad_Click){

                for(var a = 0; a < oAd_Div.length; a++){
                    oAd_Div[a].style.backgroundColor = '#ffffff';
                    oAd_Div[a].style.border = '1px solid #c1c1c1';
                    oAd_Div[a].style.boxShadow = 'none';

                    var text = oAd_Div[a].getElementsByClassName('son');
                    for(var b = 0; b < text.length; b++){
                        text[0].style.color = '#0ba1e4';
                        text[b].style.color = '#333333';
                    }
                    oAd_Div[a].ad_Click = true;
                }




                this.style.backgroundColor = '#0ba1e4';
                this.style.border = '#0ba1e4';
                this.style.boxShadow = '0 0 20px 0 rgba(45,183,245,.5)';
                for(var j = 0; j < this_text.length; j++){
                    this_text[j].style.color = '#ffffff';
                }
                this.ad_Click = false;
            }
            else{
                this.style.backgroundColor = '#ffffff';
                this.style.border = '1px solid #c1c1c1';
                this.style.boxShadow = 'none';
                for(var j = 0; j < this_text.length; j++){
                    this_text[0].style.color = '#0ba1e4';
                    this_text[j].style.color = '#333333';
                }
                this.ad_Click = true;
            }
        }
    }
})();


//(function(){
//    var ose_Lis = document.getElementsByClassName('se_ul')[0].getElementsByTagName('li');
//    var texts = document.getElementsByClassName('son');
//    var oFirst_son = document.getElementsByClassName('first_son');
//    var oLast_son = document.getElementsByClassName('last_son');
//    var oDivs = document.getElementsByClassName('service_sup');
//
//
//    for(var i = 0; i < ose_Lis.length; i++){
//        ose_Lis[i].se_Click = true;
//        ose_Lis[i].index = i;
//        ose_Lis[i].onclick = function(){
//            var text = this.getElementsByClassName('son');
//            var text_last = this.getElementsByClassName('last_son')[0];
//            var oDiv = this.getElementsByClassName('service_sup')[0];
//
//
//            if(this.se_Click){
//                for(var a = 0; a < ose_Lis.length; a++){
//                    for(var z = 0 ; z < oDivs.length; z++){
//                        oDivs[0].style.borderBottom = '1px solid #ffffff';
//                        oDivs[z].style.borderBottom = '1px solid #c1c1c1';
//                    }
//                    ose_Lis[a].style.backgroundColor = '#fafafa';
//                    ose_Lis[a].style.border = '1px solid #c1c1c1';
//                    ose_Lis[a].style.boxShadow = 'none';
//                    ose_Lis[a].style.zIndex = '0';
//                    ose_Lis[a].style.transform = 'scale(1)';
//                    for(var b = 0; b < texts.length; b++){
//                        texts[b].style.color = '#333333';
//                    }
//                    for(var c = 0; c < oFirst_son.length; c++){
//                        oFirst_son[c].style.color = '#0ba1e4';
//                    }
//                    for(var d = 0; d < oLast_son.length; d++){
//                        oLast_son[d].style.color = '#0ba1e4';
//                        oLast_son[d].style.borderColor = '#0ba1e4';
//                    }
//                    ose_Lis[a].se_Click = true;
//                }
//
//
//
//                oDiv.style.borderBottom = '1px solid #ffffff';
//                this.style.backgroundColor = '#0ba1e4';
//                this.style.border = '1px solid #0ba1e4';
//                this.style.boxShadow = '0 0 20px 0 rgba(45,183,245,.5)';
//                this.style.zIndex = '8';
//                this.style.transform = 'scale(1.1)';
//                for(var j = 0; j < text.length; j++){
//                    text[j].style.color = '#ffffff';
//                }
//                text_last.style.color = '#ffffff';
//                text_last.style.borderColor = '#ffffff';
//
//                this.se_Click = false;
//            }
//            else{
//                oDiv.style.borderBottom = '1px solid #c1c1c1';
//                this.style.backgroundColor = '#fafafa';
//                this.style.border = '1px solid #c1c1c1';
//                this.style.boxShadow = 'none';
//                this.style.zIndex = '0';
//                this.style.transform = 'scale(1)';
//                for(var j = 0; j < text.length; j++){
//                    text[0].style.color = '#0ba1e4';
//                    text[j].style.color = '#333333';
//                }
//                text_last.style.color = '#0ba1e4';
//                text_last.style.borderColor = '#0ba1e4';
//
//                this.se_Click = true;
//            }
//        }
//    }
//})();


(function(){
    var ose_Lis = document.getElementsByClassName('se_ul')[0].getElementsByTagName('li');
    var oLast_sons = document.getElementsByClassName('last_son');

    //for(var i = 0; i < oLast_sons.length; i++){
    //    oLast_sons[i].onmouseover = function(){
    //        if(this.parentNode.className = 'col-xs-12 col-sm-3 active'){
    //            this.style.color = 'red';
    //            this.style.backgroundColor = '#fff';
    //            this.style.borderColor = '#fff';
    //        }
    //        else{
    //            return 0;
    //        }
    //    }
    //}


    for(var i = 0; i < ose_Lis.length;i++){
        ose_Lis[i].se_Click = true;

        function clearStyle(){
            for(var a = 0; a < ose_Lis.length; a++){
                ose_Lis[a].className = 'col-xs-12 col-sm-3';
                ose_Lis[a].se_Click = true;
            }
            for(var b = 0; b < oLast_sons.length; b++){
                oLast_sons[b].style.color = '#0ba1e4';
            }
        }

        ose_Lis[i].onclick = function(){
            var oLast_son = this.getElementsByClassName('last_son')[0];
            if(this.se_Click){
                clearStyle();
                this.className = 'col-xs-12 col-sm-3 active';
                oLast_son.style.color = '#fff';
                this.se_Click = false;
            }
            else{
                this.className = 'col-xs-12 col-sm-3';
                oLast_son.style.color = '#0ba1e4';
                this.se_Click = true;
            }
        }
    }



})();