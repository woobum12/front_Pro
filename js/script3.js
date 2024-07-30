var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval("autoslide()",3000);

function autoslide(){
    $(slide[sno]).stop().animate({
        top:"300px"
    },1000,function(){
        $(this).css({left:"-300px"})
    });
    sno++;
    if(sno > eno){
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        top:"0"
    },1000)
}


$(".slide").hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer=setInterval("autoslide()",3000);
    }
)
// 서브메뉴
$(function(){
    $(".menu").hover(function () {
            $(this).find(".submenu").stop().slideDown()   
        }, 
        function () {
            $(".submenu").stop().slideUp()
        })
    });