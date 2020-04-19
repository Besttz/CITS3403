defaultHead = "WELCOME TO WEB MUSEUM!";
html = "HyperText Markup Language";
css = "Cascading Style Sheets";
js = "JavaScript";

function changeHead(txt) {
    document.getElementById("headText").innerHTML = txt;
}

function iconOnHover(obj) {
    $("#headText").stop();
    $("#bg-img").stop();
    $("#headText").fadeOut(300);
    setTimeout(function () {
        changeHead(obj);
    }, 300);
    $("#headText").fadeIn(300);
    switch (obj) {
        case html:
            $("#bg-img").css("background-image", "url(media/red.jpg)");
            $("#bg-img").fadeIn(300);
            break;
        case css:
            $("#bg-img").css("background-image", "url(media/yellow.jpg)");
            $("#bg-img").fadeIn(300);
            setTimeout(function () {
                $("body").css("color", "#222");
                $("#navbar").removeClass("navbar-dark");
                $("#navbar").addClass("navbar-light");
                $("#navicon").attr("src", "media/favicon-dark.svg");
            }, 300);

            break;
        case js:
            $("#bg-img").css("background-image", "url(media/blue.jpg)");
            $("#bg-img").fadeIn(300);
            setTimeout(function () {
                $("h1").css("color", "#222");
                $("#navbar").removeClass("navbar-dark");
                $("#navbar").addClass("navbar-light");
                $("#navicon").attr("src", "media/favicon-dark.svg");
            }, 300);
            break;
        default:
            break;
    }
}


function iconOffHover() {
    $("#headText").stop();
    $("#bg-img").stop();
    $("#headText").fadeOut(300);
    $("#bg-img").fadeOut(300);
    setTimeout(function () { changeHead(defaultHead); }, 300);
    setTimeout(function () {
        $("h1").css("color", "");
        $("body").css("color", "#fdfdfd");
        $("#navbar").removeClass("navbar-light");
        $("#navbar").addClass("navbar-dark");
        $("#navicon").attr("src", "media/favicon.svg");
    }, 300);
    $("#headText").fadeIn(300);
}

function iconOnClick(obj) {
    $("#homeP").fadeOut(100);
    setTimeout(function () {
        document.getElementById("homeP").innerHTML = "Departing to " + obj + " gallery.";
    }, 100);
    $("#homeP").fadeIn(100);
    setTimeout(function () {
        document.getElementById("homeP").innerHTML = "Departing to " + obj + " gallery..";
    }, 400);
    setTimeout(function () {
        document.getElementById("homeP").innerHTML = "Departing to " + obj + " gallery...";
    }, 900);
    setTimeout(function () {
        document.getElementById("homeP").innerHTML = "Departing to " + obj + " gallery....";
    }, 1200);

    setTimeout("window.location.href = '/" + obj + "/index.html'", 1500);

}

$(document).ready(function () {
    setTimeout(function () { $("#headText").fadeIn(300); }, 300);
    setTimeout(function () { $(".home-icons").fadeIn(300); }, 400);
    setTimeout(function () { $("#homeText").fadeIn(300); }, 500);

    $("#htmlIcon").hover(function () {
        iconOnHover(html);
    },
        function () {
            iconOffHover();
        }
    );
    $("#cssIcon").hover(function () {
        iconOnHover(css);
    },
        function () {
            iconOffHover();
        }
    );
    $("#jsIcon").hover(function () {
        iconOnHover(js);
    },
        function () {
            iconOffHover();
        }
    );


    $("#htmlIcon").click(function () {
        iconOnClick("html");
    }
    );
    $("#cssIcon").click(function () {
        iconOnClick("css");
    }
    );
    $("#jsIcon").click(function () {
        iconOnClick("js");
    }
    );
});