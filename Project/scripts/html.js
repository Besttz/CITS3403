clicked = false;
max = 4;
exampleStart = false;
headADD = false;
bodyADD = false;
exampleClicked = 0;

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

function timeLineOnClick(id) {
    $(".h-sec-3-p").stop(true, true);
    $(".h-sec-3-p").fadeOut(150);

    setTimeout(function () {
        $("#historyp" + id).fadeIn(150);
    }, 150);

    var txt = "";
    switch (id) {
        case 0:
            txt = "Tim Berners-Lee created HTML";
            break;
        case 1:
            txt = "Mosaic 1.0 and W3C";
            break;
        case 2:
            txt = "HTML 4.0 and XML";
            break;
        case 3:
            txt = "XHTML and Web 2.0";
            break;
        case 4:
            txt = "HTML 5 and morden WEB";
            break;

    }
    document.getElementById("h2-3").innerHTML = txt;


}

function modalMaker(buttonID) {
    switch (buttonID) {
        case 2:
            document.getElementById("htmlExampleModalHead").innerHTML = "Title";
            if (!headADD) {
                exampleClicked = 0;
                document.getElementById("htmlExampleModalBody").innerHTML = "Title element must be added inside HEAD element.<br> Please check again.";
            } else {
                document.getElementById("htmlExampleModalBody").innerHTML = "Please enter your title.";
                exampleClicked = 2;
                $("#htmlExampleModalInput1").removeClass("d-none");
            }

            break;
        case 3:
            document.getElementById("htmlExampleModalHead").innerHTML = "Body";


            break;
        case 4:
            document.getElementById("htmlExampleModalHead").innerHTML = "Heading";

            break;
        case 5:
            document.getElementById("htmlExampleModalHead").innerHTML = "Paragraph";

            break;
        case 6:
            document.getElementById("htmlExampleModalHead").innerHTML = "Table";

            break;
        case 7:
            document.getElementById("htmlExampleModalHead").innerHTML = "Image";

            break;
        default:
            break;
    }
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
    $("#history0").click(function () {
        timeLineOnClick(0);
    }
    );
    $("#history1").click(function () {
        timeLineOnClick(1);
    }
    );
    $("#history2").click(function () {
        timeLineOnClick(2);
    }
    );
    $("#history3").click(function () {
        timeLineOnClick(3);
    }
    );
    $("#history4").click(function () {
        timeLineOnClick(4);
    }
    );
    $("#B0").click(function () {
        if (!exampleStart) {
            exampleStart = true;
            $("#HExampleArea").addClass("col-lg-6");
            $("#HECode").css("display", "");
            $("#HExampleWelcome").fadeOut(300);
            setTimeout(function () {
                $("#HExampleDisplay").css("background-color", "white");
            }, 200);

        } else {
            $("#B0").popover();
        }
    }
    );
    $("#B1").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);
        } else if (!headADD) {
            headADD = true;
            $("#hECode1").fadeIn(500);
        } else {
            $("#B1").popover();
        }
    }
    );
    $("#B2").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);
        } else {
            modalMaker(2);
            $("#myModal").modal();
        }
    }
    );
    $("#B3").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else if (!bodyADD) {
            bodyADD = true;
            $("#hECode4").fadeIn(500);
        } else {
            // modalMaker(3);
            // $("#myModal").modal();
            $("#B3").popover();

        }
    }
    );
    $("#B4").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else {
            modalMaker(4);
            $("#myModal").modal();
        }
    }
    );
    $("#B5").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else {
            modalMaker(5);
            $("#myModal").modal();
        }
    }
    );
    $("#B6").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else {
            modalMaker(6);
            $("#myModal").modal();
        }
    }
    );
    $("#B7").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else {
            modalMaker(7);
            $("#myModal").modal();
        }
    }
    );

    $("#htmlExampleModalOK").click(function () {
        switch (exampleClicked) {
            case 2:
                $("#htmlExampleModalInput1").addClass("d-none");

                document.getElementById("hCode2content").innerHTML = "&lt;title&gt;" +
                    document.getElementById("htmlExampleModalInput1").value + "&lt;/title&gt;";
                $("#hECode2").fadeIn(500);
                document.getElementById("HETitle").innerHTML = document.getElementById("htmlExampleModalInput1").value;
                document.getElementById("htmlExampleModalInput1").value = "";

                break;

            default:
                break;
        }
    }
    );
});