var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval("autoslide()",3000);

function autoslide(){
        // 화면 가운데 표시된 이미지 애니메이션
    $(slide[sno]).stop().animate({
        opacity: 0
    },1000);
    sno++;
    if(sno > eno)
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        opacity: 1
        //      opacity: "1"와 동일
    },1000);



$(".slide").hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer=setInterval("autoslide()",3000);
    }
)
