max = 5; //FOR KEYBOARD PAGE CONTROL

$(document).ready(function () {
    $("#j21").click(function () {
        $("#j211").fadeIn(300);
        $("#j221").text("document.getElementById('heading').innerHTML='You Clicked'");
    }
    );
    $("#j22").click(function () {
        $("#j211").fadeIn(300);
        $("#j221").text('"button()"');
        $("#j222").fadeIn(300);
        $("#j231").html("&gt;<br>function button(){<br> document.getElementById('heading').innerHTML='You Clicked'}<br>");
    }
    );
    $("#j23").click(function () {
        $("#j211").fadeIn(300);
        $("#j221").text('"button()"');
        $("#j222").fadeIn(300);
        $("#j231").text(' src="myScript.js">');
        $("#j232").fadeIn(300);
    }
    );
});