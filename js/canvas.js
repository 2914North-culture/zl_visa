/**
 * Created by DELL on 2019/11/8.
 */
(function(){
    var oCanvas = document.getElementById('canvas');
    var oWater = oCanvas.getContext('2d');
    var width = oCanvas.width = oCanvas.offsetWidth;
    var height = oCanvas.height = oCanvas.offsetHeight;

    var A = 52;
    var W = 1/190;
    var Q = 0;
    var H = height/2;

    var A2 = 49;
    var W2 = 1/175;
    var Q2 = 0;
    var H2 = height/2;

    var A3 = 50;
    var W3 = 1/210;
    var Q3 = 0;
    var H3 = height/2;

    var speed = -0.02;
    var speed2 = -0.03;
    var speed3 = -0.028;

    var linear = oWater.createLinearGradient(0,0,width,0);
    linear.addColorStop(0,'rgba(229,229,229,0.8)');
    linear.addColorStop(0,'rgba(231,228,229,1)');


    (function draw(){
        window.requestAnimationFrame(draw);
        oWater.clearRect(0,0,width,height);
        oWater.beginPath();
        //oWater.strokeStyle = '#f2f2f2';
        oWater.strokeStyle = linear;
        oWater.lineWidth = 1;
        oWater.moveTo(0,height/2);
        Q+=speed;
        for(var x = 0; x < width; x++){
            var s = 0.1*Math.sin(x/180)+1;
            var y = A*Math.sin(W*x + Q) + H;
            y = y*s;
            oWater.lineTo(x,y);
        }
        oWater.stroke();
        oWater.closePath();

        //2
        oWater.beginPath();
        //oWater.strokeStyle = '#f2f2f2';
        oWater.strokeStyle = linear;
        oWater.lineWidth = 1;
        oWater.moveTo(0,height/2);
        Q2+=speed2;
        for(var x = 0; x < width;x++){
            var s = 0.2*Math.sin(x/200)+1;
            var y = A2*Math.sin(W2*x + Q2) + H2;
            y = y*s;
            oWater.lineTo(x,y);
        }
        oWater.stroke();
        oWater.closePath();

        //3
        oWater.beginPath();
        //oWater.strokeStyle = '#f2f2f2';
        oWater.strokeStyle = linear;
        oWater.lineWidth = 1;
        oWater.moveTo(0,height/2);
        Q3+=speed3;
        for(var x = 0; x < width; x++){
            var s = 0.3*Math.sin(x/230) + 1.2;
            var y = A3*Math.sin(W3*x + Q3) + H3;
            y = y*s;
            oWater.lineTo(x,y);
        }
        oWater.stroke();
        oWater.closePath();
    })();
})();