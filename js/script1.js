var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval("autoslide()",3000);

function autoslide(){
    $(slide[sno]).stop().animate({
        left:"100%"
    },1000,function(){
        $(this).css({left:"-100%"})
    });
    sno++;
    if(sno > eno){
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        left:"0"
    },1000)
}

// tab-------------------------------
$('.tabMenu li').click(function () { 
    var idx = $(this).index()

    $('.tabItem >*').hide().removeClass('on')
    $('.tabItem >*').eq(idx).show().addClass('on')

    $('.tabItem li').removeClass('on')
    $(this).addClass('on')
    
});
// menu
$(function(){

    $('header .nav > ul').hover(function () {
        $(this).find('.submenu').stop().slideDown(1000);
    },
        function (){
            $('.submenu').stop().slideUp(500);
        });
});
// tabMenu2
$(".tab-news > a").click(function(){
    $(this).css({
        "background-color": "white"
    });

    $(".tab-gallery > a").css({
        "background-color": "violet"
    });

    $(".gallery").hide();
    $(".notice").show();
});

$(".tab-gallery > a").click(function (){

    $(this).css({
        "background-color": "white"
    });

    $(".tab-news > a").css({
        "background-color": "violet"
    });

    $(".notice").hide();
    $(".gallery").show();
});

function openPop() {
    $(".pop").show("slow");
}
function closePop() {
    $(".pop").hide("fast");
}