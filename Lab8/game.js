//game

$(function(){

    $("#up").on("click",function(){       
        $("#box").stop(); 
        $("#box").animate({
            top: "0px"
        },1000);
    });

    $("#down").on("click",function(){       
        $("#box").stop();
        $("#box").animate({
            top: "350px"
        },1000);
    });

    $("#left").on("click",function(){       
        $("#box").stop();
        $("#box").animate({
            left: "0px"
        },1000);
    });

    $("#right").on("click",function(){       
        $("#box").stop();
        $("#box").animate({
            left: "350px"
        },1000);
    });

    $("#fadeOut").on("click",function(){        
        $("#box").stop();
        clearInterval(intervalID);
        $("#box").fadeOut(2000);
    });

    $("#fadeIn").on("click",function(){        
        $("#box").stop();
        clearInterval(intervalID);
        $("#box").fadeIn(2000);
    });

    var intervalID = 500;

    $("#blink").on("click",function(){        
        $("#box").stop();
       intervalID = setInterval(blink, 500);
           function blink (){
            $("#box").fadeOut(500).fadeIn(500);            
        };
    });

    $("#reset").on("click",function(){        
        clearInterval(intervalID);
        $("#box").stop();
        $("#box").fadeIn(0);
        $("#box").animate({
            left: "0px",
            top: "0px"
        },0);
    });

});