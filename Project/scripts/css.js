max = 5; //FOR KEYBOARD PAGE CONTROL
csstxt = "body {<br>   color:white<br> }<br> h1 {<br>   font-size: medium<br>    } <br> p {<br>   olor:black<br>   ;margin: 1rem<br> }<br>";
function CSSSelector(pageID) {
    switch (pageID) {
        case 0:
            $("#CSSSelector1").fadeOut(200);
            $("#CSSSelector2").fadeOut(200);
            break;
        case 1:
            $("#CSSSelector0").fadeOut(200);
            $("#CSSSelector2").fadeOut(200);
            break;
        case 2:
            $("#CSSSelector0").fadeOut(200);
            $("#CSSSelector1").fadeOut(200);
            break;
        default:
            break;
    }
    setTimeout(function () { $("#CSSSelector" + pageID).fadeIn(200); }, 200);
}

function csOnclick(csid) {
    for (let index = 30; index < 36; index++) {
        $("#c" + index).css("background-color", "rgba(243, 146, 146, 0.3)");
    }
    switch (csid) {
        case 0:
            for (let index = 30; index < 36; index++) {
                $("#c" + index).css("background-color", "rgba(243, 200, 200, 0.8)");
            }
            break;
        case 1:
            $("#c31").css("background-color", "rgba(243, 200, 200, 0.8)");
            $("#c33").css("background-color", "rgba(243, 200, 200, 0.8)");
            $("#c35").css("background-color", "rgba(243, 200, 200, 0.8)");
            
            break;
        case 2:
            $("#c34").css("background-color", "rgba(243, 200, 200, 0.8)");

            break;
        case 3:
            $("#c34").css("background-color", "rgba(243, 200, 200, 0.8)");
            $("#c35").css("background-color", "rgba(243, 200, 200, 0.8)");

            break;
        case 4:
            $("#c35").css("background-color", "rgba(243, 200, 200, 0.8)");

            break;
        case 5:
            $("#c35").css("background-color", "rgba(243, 200, 200, 0.8)");

            break;

        default:
            break;
    }
}

$(document).ready(function () {
    $("#inlineCSS").click(function () {
        $("#inlineCSS1").css("display", "inline");
        $("#inlineCSS2").css("display", "inline");
        $("#inlineCSS3").css("display", "inline");
        $("#CSSBlock1").css("display", "none");
        $("#CSSBlock3").css("display", "none");
    }
    );
    $("#internalCSS").click(function () {
        $("#inlineCSS1").css("display", "none");
        $("#inlineCSS2").css("display", "none");
        $("#inlineCSS3").css("display", "none");
        $("#CSSBlock3").css("display", "none");
        $("#CSSBlock1").css("display", "");
        // $("#internalCSS2").css("display", "inline");
        $("#CSSBlock2").html("&lt;style&gt;<br>" + csstxt + "&lt;/style&gt;");
    }
    );
    $("#externalCSS").click(function () {
        $("#inlineCSS1").css("display", "none");
        $("#inlineCSS2").css("display", "none");
        $("#inlineCSS3").css("display", "none");
        $("#CSSBlock1").css("display", "");
        $("#CSSBlock3").css("display", "");
        $("#CSSBlock2").html('&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;');
        $("#CSSBlock4").html(csstxt);
        $("#externalCSS2").fadeIn(500);
    }
    );

    $("#cs0").click(function () {
        csOnclick(0);
    }
    );

    $("#cs1").click(function () {
        csOnclick(1);
    }
    );
    $("#cs2").click(function () {
        csOnclick(2);
    }
    );
    $("#cs3").click(function () {
        csOnclick(3);
    }
    );
    $("#cs4").click(function () {
        csOnclick(4);
    }
    );
    $("#cs5").click(function () {
        csOnclick(5);
    }
    );
});