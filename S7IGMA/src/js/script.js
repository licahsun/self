$(function () {
    //漢堡按鈕
    $('.hamburger').click(function () {
        //切換 三 & X
        $(this).toggleClass('is-active');
        //切換 顯示 & 隱藏
        $('.navigation').toggleClass('show');
    });

    //捲動至指定位置
    $(".menu a").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    //gotop
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    //淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo("fast", 1);
        } else {
            $("#gotop").stop().fadeOut("fast", 1);
        }
    });
});

//smoove共用預設值
$('.smoove').smoove({
    offset: 250 //離底部多遠載入
});