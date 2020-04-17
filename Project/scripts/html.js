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
            txt = "&lt;link&gt;";
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
    document.getElementById("headText2").innerHTML = txt;
}

function changeP(id3) {
    var txt = "";
    switch (id3) {
        case 0:
            txt = "This is the html tag. " +
                "The most outside element of any html documents.<br>" +
                "T sasxgfdcxgany html documents." +
                "The moswrserdftgyuhijok documents." +
                "The most fjdhfsgdslvevovldkfug ijo nts.";
            break;
        case 1:
            txt = "&lt;head&gt;";
            break;
        case 2:
            txt = "TESTTESTTEST！！！";
            break;
        case 3:
            txt = "&lt;link&gt;";
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
    document.getElementById("homeP2").innerHTML = txt;
}


function cardOnHover(id) {
    $("#headText2").stop();
    $("#headText2").fadeOut(300);
    setTimeout(function () {
        changeHead(id);
    }, 300);
    $("#headText2").fadeIn(300);
}

function cardOnClick(id2) {
    $("#homeP2").stop();
    $("#homeP2").fadeOut(300);
    setTimeout(function () {
        changeP(id2);
    }, 300);
    $("#homeP2").fadeIn(300);

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
        cardOnClick(0);
    }
    );
    $("#hCode5").click(function () {
        cardOnClick(0);
    }
    );
    $("#hCode6").click(function () {
        cardOnClick(0);
    }
    );
    $("#hCode7").click(function () {
        cardOnClick(0);
    }
    );
    $("#hCode8").click(function () {
        cardOnClick(0);
    }
    );

});