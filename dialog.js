$(window).scroll(function() {
    const currentHeight = $(window).scrollTop();
    console.log(currentHeight);
});

$("#click-button1").click(function () {
    $("#dialog1").dialog({
        buttons: [
            {
                text: "Yes",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Yes");
                    $(this).dialog("close"); // Pop up gaat weg
                    // startSpel();
                }
            },
            {
                text: "No",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("No");
                    $(this).dialog("close"); // Pop up gaat weg
                    // rollMiddleFingerCredits();
                }
            },
        ]
    }).dialog("widget").find(".ui-dialog-title").hide();
});

$("#click-button2").click(function () {
    $("#dialog2").dialog({
        buttons: [
            {
                text: "Take the risk",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Take the risk");
                    $(this).dialog("close"); // Pop up gaat weg
                    // grabSword();
                }
            },
            {
                text: "I'll skip",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("I'll skip");
                    $(this).dialog("close"); // Pop up gaat weg
                    // skipSword();
                }
            },
        ]
    }).dialog("widget").find(".ui-dialog-title").hide();
});

$("#click-button3").click(function () {
    $("#dialog3").dialog({
        buttons: [
            {
                text: "Eat it!",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Eat it!");
                    $(this).dialog("close"); // Pop up gaat weg
                    // eatMushroom();
                }
            },
            {
                text: "I hate mushrooms",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("I hate mushrooms");
                    $(this).dialog("close"); // Pop up gaat weg
                    // noEatMushroom();
                }
            },
        ]
    }).dialog("widget").find(".ui-dialog-title").hide();
});

$("#click-button4").click(function () {
    $("#dialog4").dialog({
        buttons: [
            {
                text: "Use sword",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Use sword");
                    $(this).dialog("close"); // Pop up gaat weg
                    // attackSword();
                }
            },
            {
                text: "Slap him",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Slap him");
                    $(this).dialog("close"); // Pop up gaat weg
                    // attackSlap();
                }
            },
            {
                text: "Scream at him",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Scream at him");
                    $(this).dialog("close"); // Pop up gaat weg
                    // attackScream();
                }
            },
        ]
    }).dialog("widget").find(".ui-dialog-title").hide();
});

$("#click-button5").click(function () {
    $("#dialog5").dialog({
        buttons: [
            {
                text: "Return, duh",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("Return, duh");
                    $(this).dialog("close"); // Pop up gaat weg
                    // returnGold();
                }
            },
            {
                text: "I could use it...",
                click: function () { // Er wordt geklikt/keuze gemaakt
                    console.log("I could use it...");
                    $(this).dialog("close"); // Pop up gaat weg
                    // keepGold();
                }
            },
        ]
    }).dialog("widget").find(".ui-dialog-title").hide();
});