// 네비
$(function(){

    $("header nav > ul").hover(function () {
            $(this).find(".submenu").stop().slideDown(1000);
            
        }, function () {
            $(".submenu").stop().slideUp(500);
        })
});
// 슬라이드이미지
var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval("autoslide()", 3000);

function autoslide(){
    $(slide[sno]).stop().animate({
        opacity : 0   
    },1000);
    sno++;
    if(sno>eno)
        sno = 0;
    
    $(slide[eno]).stop().animate({
        opacity : 1
    },1000);
};

$(".slide").hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer=setInterval("autoslide()",3000);
    }
);
// 팝
function openPop(){
    $(".notice-page").show();
}
function closePop(){
    $(".notice-page").hide();
}
// 갤러리
$(".tab-news").click(function () { 
    $(this).css({
        "background-color" : "violet",
        "border" : "1px solid black"
    });
    $(".tab-gallery").css({
        "background-color" : "white",
        "border" : "white"
    });
    $(".notice").show();
    $(".gallery").hide();
});
$(".tab-gallery").click(function(){
    $(this).css({
        "background-color" : "violet",
        "border" : "1px solid black"
    });
    $(".tab-news").css({
        "background" : "white",
        "border" : "white"
    });
    $(".notice").hide();
    $(".gallery").show();
});