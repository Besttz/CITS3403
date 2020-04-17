now = 1;
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
        if (code == 37 && now != 1)
        {
            window.location.href = $("#prev"+now).attr("href");
            now--;
        }
        if (code == 39&& now <max) {

            window.location.href = $("#next"+now).attr("href");
            now++;
        }

    });

});