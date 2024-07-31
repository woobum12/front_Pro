// 페이지 리사이징시에 페이지새로고침 발생
window.onresize = function () {
    document.location.reload();
}
// 미디어쿼리 적용
if (matchMedia("screen and (max-width: 700px)").matches) {
    // 세로모드
    $(".wrap").css({
        "background-color": "yellow",
        "color": "orange"
    });
} else if (matchMedia("not all and (orientation: landscape)").matches) {
    // 세로모드_모바일체크
    $(".wrap").css({
        "background-color": "orange",
        "color": "white"
    });
} else if ("screen and (min-width: 1200px)") {
    // 가로모드
    $(".wrap").css({
        "border": "1px solid red",
        "background-color": "olive",
        "color": "white"
    });
}