$(document).ready(function () {
    setTimeout(function () { $(".home-icons").fadeIn(300); }, 300);
    setTimeout(function () { $("#homeText").fadeIn(300); }, 400);
    setTimeout(function () { $("#homeP").fadeIn(300); }, 500);

    $("#card").hover(function () {
        iconOnHover();
    },
        function () {
            iconOffHover();
        }
    );

    $(document).keydown(function (ev) {
        var event = window.event || ev;
        var code = event.keyCode || event.which;
        if (code == 37)
            window.location.href = $("#prev").attr("href");
        if (code == 39)
            window.location.href = $("#next").attr("href");
    });

});