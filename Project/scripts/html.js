clicked = false;
max = 5; //FOR KEYBOARD PAGE CONTROL
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

        case 5:
            document.getElementById("htmlExampleModalHead").innerHTML = "Paragraph";
            if (!bodyADD) {
                exampleClicked = 0;
                document.getElementById("htmlExampleModalBody").innerHTML = "Paragraph element must be added inside BODY element.<br> Please check again.";
            } else {
                document.getElementById("htmlExampleModalBody").innerHTML = "Please enter your content.";
                $("#htmlExampleModalInput1").attr("placeholder", "Enter here!");
                exampleClicked = 5;
                $("#htmlExampleModalInput1").removeClass("d-none");
            }
            break;
        case 4:
            document.getElementById("htmlExampleModalHead").innerHTML = "Heading";
            if (!bodyADD) {
                exampleClicked = 0;
                document.getElementById("htmlExampleModalBody").innerHTML = "Heading element must be added inside BODY element.<br> Please check again.";
            } else {
                document.getElementById("htmlExampleModalBody").innerHTML = "Please enter your Heading.";
                $("#htmlExampleModalInput1").attr("placeholder", "Enter here!");
                exampleClicked = 4;
                $("#htmlExampleModalInput1").removeClass("d-none");
            }

            break;
        case 6:
            document.getElementById("htmlExampleModalHead").innerHTML = "Link";
            if (!bodyADD) {
                exampleClicked = 0;
                document.getElementById("htmlExampleModalBody").innerHTML = "Link element must be added inside BODY element.<br> Please check again.";
            } else {
                document.getElementById("htmlExampleModalBody").innerHTML = "Please enter your Link.";
                exampleClicked = 6;
                $("#htmlExampleModalInput1").removeClass("d-none");
                $("#htmlExampleModalInput1").attr("placeholder", "Enter the URL of your link with \"Http(s)://\".");
                $("#htmlExampleModalInput2").removeClass("d-none");
                $("#htmlExampleModalInput2").attr("placeholder", "Enter the title(display content) of your link.");
            }

            break;
        case 7:
            document.getElementById("htmlExampleModalHead").innerHTML = "Image";
            if (!bodyADD) {
                exampleClicked = 0;
                document.getElementById("htmlExampleModalBody").innerHTML = "Image element must be added inside BODY element.<br> Please check again.";
            } else {
                document.getElementById("htmlExampleModalBody").innerHTML = "Please enter your source link.<br> Or click OK directly to use default image.";
                exampleClicked = 7;
                $("#htmlExampleModalInput1").removeClass("d-none");
                $("#htmlExampleModalInput1").attr("placeholder", "Enter the URL of your image with \"Http(s)://\".");
            }

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
    $("#B8").click(function () {
        if (!exampleStart) {
            $("#HExampleWelcomeHint").fadeIn(500);
            $("#HExampleWelcomeHint").fadeOut(500);
            $("#HExampleWelcomeHint").fadeIn(500);

        } else if (bodyADD) {
            $("#hEndOfBody").before('<div class="card" style="background-color:#083D77 ;">' +
                '<div class=" card-body">' +
                '&lt;table style="width:100%"&gt;' + "&lt;tr&gt;<br>     &lt;th&gt;Firstname&lt;/th&gt;<br>     &lt;th&gt;Lastname&lt;/th&gt;<br>      &lt;th&gt;Age&lt;/th&gt;<br>   &lt;/tr&gt;<br>   &lt;tr&gt;<br>     &lt;td&gt;Tommy&lt;/td&gt;<br>     &lt;td&gt;Zhang&lt;/td&gt;<br>     &lt;td&gt;21&lt;/td&gt;<br>   &lt;/tr&gt;<br>   &lt;tr&gt;<br>     &lt;td&gt;Zhenyu&lt;/td&gt;<br>     &lt;td&gt;Yang&lt;/td&gt;<br>     &lt;td&gt;24&lt;/td&gt;<br>   &lt;/tr&gt;<br>" + '&lt;/table&gt;'
                + '</div>');

            $("#hEndOfBrowser").before('<table class="broswerP" style="width:100%">' +
                "<tr>     <th>Firstname</th>     <th>Lastname</th>      <th>Age</th>   </tr>   <tr>     <td>Tommy</td>     <td>Zhang</td>     <td>21</td>   </tr>   <tr>     <td>Zhenyu</td>     <td>Yang</td>     <td>24</td>   </tr>" + '</table>');
            document.getElementById("htmlExampleModalInput1").value = "";
            $("#htmlExampleModalInput1").addClass("d-none");
        }
    }
    );

    $("#htmlExampleModalOK").click(function () {
        $("#htmlExampleModalInput1").addClass("d-none");

        switch (exampleClicked) {
            case 2:
                document.getElementById("hCode2content").innerHTML = "&lt;title&gt;" +
                    document.getElementById("htmlExampleModalInput1").value + "&lt;/title&gt;";
                $("#hECode2").fadeIn(500);
                document.getElementById("HETitle").innerHTML = document.getElementById("htmlExampleModalInput1").value;
                document.getElementById("htmlExampleModalInput1").value = "";
                $("#htmlExampleModalInput1").addClass("d-none");
                break;


            case 4:
                $("#hEndOfBody").before('<div class="card" style="background-color:#FFDEAA ;">' +
                    '<div class=" card-body">' +
                    '&lt;h1&gt;' + document.getElementById("htmlExampleModalInput1").value + '&lt;/h1&gt;'
                    + '</div>');

                $("#hEndOfBrowser").before('<div class="broswerH">' +
                    document.getElementById("htmlExampleModalInput1").value + '</div>');
                document.getElementById("htmlExampleModalInput1").value = "";
                $("#htmlExampleModalInput1").addClass("d-none");
                break;

            case 5:
                $("#hEndOfBody").before('<div class="card" style="background-color:#9DC6CA ;">' +
                    '<div class=" card-body">' +
                    '&lt;p&gt;' + document.getElementById("htmlExampleModalInput1").value + '&lt;/p&gt;'
                    + '</div>');

                $("#hEndOfBrowser").before('<div class="broswerP">' +
                    document.getElementById("htmlExampleModalInput1").value + '</div>');
                document.getElementById("htmlExampleModalInput1").value = "";
                $("#htmlExampleModalInput1").addClass("d-none");
                break;

            case 6:

                $("#hEndOfBody").before('<div class="card" style="background-color:#F99A75 ;">' +
                    '<div class=" card-body">' +
                    '&lt;a href="' + document.getElementById("htmlExampleModalInput1").value + '"&gt;'
                    + document.getElementById("htmlExampleModalInput2").value + '&lt;/a&gt;'
                    + '</div>');

                $("#hEndOfBrowser").before('<a class="broswerA" href="' +
                    document.getElementById("htmlExampleModalInput1").value + '">' +
                    document.getElementById("htmlExampleModalInput2").value + '</a>');
                document.getElementById("htmlExampleModalInput1").value = "";
                $("#htmlExampleModalInput1").addClass("d-none");
                document.getElementById("htmlExampleModalInput2").value = "";
                $("#htmlExampleModalInput2").addClass("d-none");
                break;

            case 7:
                if (document.getElementById("htmlExampleModalInput1").value == "") {
                    document.getElementById("htmlExampleModalInput1").value = "../media/img1.png";
                }
                $("#hEndOfBody").before('<div class="card" style="background-color:#DA4167 ;">' +
                    '<div class=" card-body">' +
                    '&lt;img src="' + document.getElementById("htmlExampleModalInput1").value + '&lt;/img&gt;'
                    + '</div>');

                $("#hEndOfBrowser").before('<img class=" " src="' +
                    document.getElementById("htmlExampleModalInput1").value + '">');
                document.getElementById("htmlExampleModalInput1").value = "";
                $("#htmlExampleModalInput1").addClass("d-none");

                break;

            default:
                break;
        }
        document.getElementById("htmlExampleModalInput1").value = "";

    }
    );
});