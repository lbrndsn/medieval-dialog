// Dit is puur voor onszelf om bij te kunnen houden wat de positie is (met verticale scroll)
// $(window).scroll(function() {
//     const currentHeight = $(window).scrollTop();
//     console.log("Vertical: " + currentHeight);
// });
//
// // Zelfde maar dan voor horizontale scroll
// $(window).scroll(function() {
//     const currentHeight = $(window).scrollLeft();
//     console.log("Horizontal: " + currentHeight);
// });

// Deze moeten nog aangepast worden o.b.v. functie hierboven (handmatig)
const scrollPositionDialog1 = 200;
const scrollPositionDialog2 = 0;
const scrollPositionDialog3 = 0;
const scrollPositionDialog4 = 0;
const scrollPositionDialog5 = 0;

// $("#click-button1").click(function () {
//     $("#dialog1").dialog({
//         buttons: [
//             {
//                 text: "Yes",
//                 click: function () { // Er wordt geklikt/keuze gemaakt
//                     console.log("Yes");
//                     $(this).dialog("close"); // Pop up gaat weg
//                     // startSpel();
//                 }
//             },
//             {
//                 text: "No",
//                 click: function () { // Er wordt geklikt/keuze gemaakt
//                     console.log("No");
//                     $(this).dialog("close"); // Pop up gaat weg
//                     // rollMiddleFingerCredits();
//                 }
//             },
//         ],
//         open: disableBodyScrolling,
//         close: enableBodyScrolling
//     }).dialog("widget").find(".ui-dialog-title").hide();
// });

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
        ],
        open: disableBodyScrolling,
        close: enableBodyScrolling
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
        ],
        open: disableBodyScrolling,
        close: enableBodyScrolling
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
        ],
        open: disableBodyScrolling,
        close: enableBodyScrolling
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
        ],
        open: disableBodyScrolling,
        close: enableBodyScrolling
    }).dialog("widget").find(".ui-dialog-title").hide();
});

function disableBodyScrolling() {
    $('#disableScrollDiv').css({
        display: "block"
    });

    $('body').css({
        overflow: "hidden"
    });
}

// Deze width en height nog veranderen naar auto
function enableBodyScrolling() {
    $('#disableScrollDiv').css({
        display: "hidden"
    });

    $('body').css({
        overflow: "auto"
    });
}

function checkScrollPosition(heightOrWidth) {
    console.log(heightOrWidth);
    if (heightOrWidth > scrollPositionDialog1 - 10 && heightOrWidth < scrollPositionDialog1 + 10) {
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
            ],
            open: disableBodyScrolling,
            close: enableBodyScrolling
        }).dialog("widget").find(".ui-dialog-title").hide();
    }
}

// } else if ($height === scrollPositionDialog2) {
//     $("#dialog2").dialog("open");
// } else if ($height === scrollPositionDialog3) {
//     $("#dialog3").dialog("open");
// } else if ($height === scrollPositionDialog4) {
//     $("#dialog4").dialog("open");
// } else if ($height === scrollPositionDialog5) {
//     $("#dialog5").dialog("open");
// }

// Deze voor verticale scroll pagina's
$(window).scroll(function() {
    const currentHeight = $(window).scrollTop();
    checkScrollPosition(currentHeight);
});

// Deze voor horizontale scrollpagina
$(window).scroll(function() {
    const currentWidth = $(window).scrollLeft();
    checkScrollPosition(currentWidth);
});