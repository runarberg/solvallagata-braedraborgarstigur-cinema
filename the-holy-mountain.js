$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".info").css({
            'position': "fixed",
            'top': "100%"
        }).animate({top: 0}, 3000);
        $("html, body").animate({ scrollTop: 0 }, 3000, function() {
            $(".info").css({
                position: "absolute"
            });
        });
    }
});
