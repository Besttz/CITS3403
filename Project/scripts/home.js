defaultHead = "WELCOME TO WEB MUSEUM!";
html = "HyperText Markup Language";
css = "Cascading Style Sheets";
js = "JavaScript";
function changeHead(txt) {
    document.getElementById("headText").innerHTML = txt;
}

function iconOnHover(obj) {
    $("#headText").fadeOut(500);
    setTimeout(function () { changeHead(obj); }, 499);
    $("#headText").fadeIn(500);
}


function iconOffHover() {
    $("#headText").fadeOut(500);
    setTimeout(function () { changeHead(defaultHead); }, 499);
    $("#headText").fadeIn(500);
}

$(document).ready(function () {
    $("#htmlIcon").hover(function () {
        iconOnHover(html);
    },
        function () {
            iconOffHover();
        }
    );
    $("#cssIcon").hover(function () {
        $("#headText").fadeOut(500);
        setTimeout(function () { changeHead(css); }, 499);
        $("#headText").fadeIn(500);
    },
        function () {
            $("#headText").fadeOut();
            setTimeout(function () { changeHead(defaultHead); }, 499);
            $("#headText").fadeIn();
        }
    );
    $("#jsIcon").hover(function () {
        $("#headText").fadeOut(500);
        setTimeout(function () { changeHead(js); }, 499);
        $("#headText").fadeIn(500);
    },
        function () {
            $("#headText").fadeOut();
            setTimeout(function () { changeHead(defaultHead); }, 499);
            $("#headText").fadeIn();
        }
    );
});