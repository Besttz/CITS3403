max = 5; //FOR KEYBOARD PAGE CONTROL
csstxt = "body {<br>   color:white<br> }<br> h1 {<br>   font-size: medium<br>    } <br> p {<br>   olor:black<br>   ;margin: 1rem<br> }<br>";
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
});