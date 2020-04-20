max = 5; //FOR KEYBOARD PAGE CONTROL
alerttxt = 'I am an alert box by JavaScript! To make your own one? \n' +
    'Simply add onclick="alert(content);" to any element tag.';

exampleStart = false;


function JSSelector(pageID) {

    $("#j31").fadeOut(200);
    $("#j32").fadeOut(200);

    setTimeout(function () { $("#j" + pageID).fadeIn(200); }, 200);
}

function jsOnclick(jsid) {
    for (let index = 0; index < 6; index++) {
        $("#j34" + index).css("background-color", "rgba(145, 192, 236, 0.3)");
    }
    switch (jsid) {
        case 0:
            // for (let index = 30; index < 36; index++) {
            //     $("#c" + index).css("background-color", "rgba(243, 200, 200, 0.8)");
            // }
            $("#j344").css("background-color", "rgba(145, 192, 255, 0.8)");

            break;
        case 1:
            $("#j341").css("background-color", "rgba(145, 192, 255, 0.8)");
            break;
        case 2:
            $("#j343").css("background-color", "rgba(145, 192, 255, 0.8)");
            $("#j345").css("background-color", "rgba(145, 192, 255, 0.8)");
            break;
        case 3:
            $("#j342").css("background-color", "rgba(145, 192, 255, 0.8)");
            $("#j3401").fadeIn(300);
            break;
        case 4:
            $("#j344").css("background-color", "rgba(145, 192, 255, 0.8)");
            $("#j3402").html("../img.png");
            break;
        case 5:
            $("#j342").css("background-color", "rgba(145, 192, 255, 0.8)");
            $("#j3403").fadeIn(300);
            break;

        default:
            break;
    }
}


function JSDemo(jID) {
    if (!exampleStart) {
        exampleStart = true;
        $("#HExampleArea").addClass("col-lg-6");
        $("#HECode").css("display", "");
        $("#HExampleWelcome").fadeOut(300);
        $("#HExampleDisplay").css("background-color", "#222");

        setTimeout(function () {
            $("#HExampleContent").fadeIn(300);
        }, 300);
        $("#j40").fadeIn(200);
    }

    if (jID = 0) {
        $.ajax({
            type: "GET",
            url: 'https://api.openweathermap.org/data/2.5/weather?q=perth&appid=fb9eb902711a0edee2441da1d667dd01',
            success: function (data) {
                console.log(data);
                // var x;
                // var text;
                // for (x in data) {
                //     text += data[x] + "\n";
                // }
                $("#j40").text("Successful Get");
                setTimeout(function () {
                    $("#j410").text(data.name);
                    $("#j411").text(data.weather[0].main);
                    $("#j412").text(data.weather[0].description);
                    $("#j414").text(data.wind.deg);
                    $("#j415").text(data.wind.speed);
                }, 1000);

            },
        });
    } else if (jID = 1) {
        $.ajax({
            type: "GET",
            url: 'https://coronavirus-tracker-api.herokuapp.com/v2/locations',
            success: function (data) {
                console.log(data);
                $("#j40").text("Successful Get");
                setTimeout(function () {
                    $("#j410").text('Confirmed: ' + data.latest.confirmed);
                    $("#j411").text('Deaths: ' + data.latest.deaths);
                    $("#j412").text(" ");
                    $("#j414").text(" ");
                    $("#j415").text(" ");
                }, 1000);

            },
        });
    }

}

$(document).ready(function () {
    $("#j21").click(function () {
        $("#j232").fadeOut(300);
        $("#j222").fadeOut(300);
        $("#j211").fadeIn(300);
        $("#j221").text("document.getElementById('heading').innerHTML='You Clicked'");
    }
    );
    $("#j22").click(function () {
        $("#j232").fadeOut(300);
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