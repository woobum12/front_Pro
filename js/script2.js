var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[sno]).stop().animate({
        left: "-100%"
    },1000,function(){
        $(this).css({left:"100%"});
    });
    sno++;
    if(sno > eno) sno = 0;
    $(slide[sno]).stop().animate({
        left: "0"
    },1000);
}

// 기능사 문제에는 특별히 주어져있지 않지만 보통
// 마우스가 영역을 벗어나면 다시 자동 슬라이드 작동
$(".slide").hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer=setInterval("autoslide()",3000);
    }
)