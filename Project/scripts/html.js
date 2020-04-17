clicked = false;

function changeHead(id) {
    var txt = "";
    switch (id) {
        case 0:
            txt = "&lt;html&gt;";
            break;
        case 1:
            txt = "&lt;head&gt;";
            break;
        case 2:
            txt = "&lt;title&gt;";
            break;
        case 3:
            txt = "&lt;meta&gt;";
            break;
        case 4:
            txt = "&lt;body&gt;";
            break;
        case 5:
            txt = "&lt;h1-h6&gt;";
            break;
        case 6:
            txt = "&lt;h1-h6&gt;";
            break;
        case 7:
            txt = "&lt;p&gt;";
            break;
        case 8:
            txt = "&lt;img&gt;";
            break;

        default:

            txt = "Continue click other blocks!"
            break;
    }
    if (!clicked || id != -1) {
        document.getElementById("headText2").innerHTML = txt;
    }
}


function cardOnHover(id) {

    $("#headText2").stop(true, false);
    $("#headText2").fadeOut(150);
    setTimeout(function () {
        changeHead(id);
    }, 150);
    $("#headText2").fadeIn(150);
}

function cardOnClick(id) {
    clicked = true;
    $(".h-sec-2-p").stop(true, true);
    $(".h-sec-2-p").fadeOut(150);

    setTimeout(function () {
        switch (id) {
            case 0:
                $("#htmlP").fadeIn(150);
                break;
            case 1:
                $("#htmlP").css("display", "none");
                $("#headP").fadeIn(150);
                break;
            case 2:
                $("#htmlP").css("display", "none");
                $("#headP").css("display", "none");
                $("#titleP").fadeIn(150);
                break;
            case 3:
                $("#htmlP").css("display", "none");
                $("#headP").css("display", "none");
                $("#linkP").fadeIn(150);
                break;
            case 4:
                $("#htmlP").css("display", "none");
                $("#bodyP").fadeIn(150);
                break;
            case 5:
                $("#htmlP").css("display", "none");
                $("#bodyP").css("display", "none");
                $("#headingP").fadeIn(150);
                break;
            case 6:
                $("#htmlP").css("display", "none");
                $("#bodyP").css("display", "none");
                $("#headingP").fadeIn(150);
                break;
            case 7:
                $("#htmlP").css("display", "none");
                $("#bodyP").css("display", "none");
                $("#pP").fadeIn(150);
                break;
            case 8:
                $("#htmlP").css("display", "none");
                $("#bodyP").css("display", "none");
                $("#pP").css("display", "none");
                $("#imgP").fadeIn(150);
                break;

        }
    }, 150 + id * 2);

}



$(document).ready(function () {

    $("#hCode0").hover(function () {
        cardOnHover(0);
    },
        function () {
            cardOnHover(-1);
        }
    );

    $("#hCode1").hover(function () {
        cardOnHover(1);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode2").hover(function () {
        cardOnHover(2);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode3").hover(function () {
        cardOnHover(3);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode4").hover(function () {
        cardOnHover(4);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode5").hover(function () {
        cardOnHover(5);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode6").hover(function () {
        cardOnHover(6);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode7").hover(function () {
        cardOnHover(7);
    },
        function () {
            cardOnHover(-1);
        }
    ); $("#hCode8").hover(function () {
        cardOnHover(8);
    },
        function () {
            cardOnHover(-1);
        }
    );
    $("#hCode0").click(function () {
        cardOnClick(0);
    }
    );
    $("#hCode1").click(function () {
        cardOnClick(1);
    }
    );
    $("#hCode2").click(function () {
        cardOnClick(2);
    }
    );
    $("#hCode3").click(function () {
        cardOnClick(3);
    }
    );
    $("#hCode4").click(function () {
        cardOnClick(4);
    }
    );
    $("#hCode5").click(function () {
        cardOnClick(5);
    }
    );
    $("#hCode6").click(function () {
        cardOnClick(6);
    }
    );
    $("#hCode7").click(function () {
        cardOnClick(7);
    }
    );
    $("#hCode8").click(function () {
        cardOnClick(8);
    }
    );

});