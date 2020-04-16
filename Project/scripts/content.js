function iconOnHover(obj) {
}


$(document).ready(function () {
    setTimeout(function () { $(".home-icons").fadeIn(300); }, 300);
    setTimeout(function () { $("#homeText").fadeIn(300); }, 400);
    setTimeout(function () { $("#homeP").fadeIn(300); }, 500);

    $("#htmlIcon").hover(function () {
        iconOnHover();
    },
        function () {
            iconOffHover();
        }
    );
});