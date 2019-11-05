// Deze moeten nog aangepast worden o.b.v. functie hierboven (handmatig)
const scrollPositionDialog1 = 200;
const scrollPositionDialog2 = 400;
const scrollPositionDialog3 = 600;
const scrollPositionDialog4 = 800;
const scrollPositionDialog5 = 1000;

let dialog1HasBeenOpened = false;
let dialog2HasBeenOpened = false;
let dialog3HasBeenOpened = false;
let dialog4HasBeenOpened = false;
let dialog5HasBeenOpened = false;

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
    if (heightOrWidth > scrollPositionDialog1 - 10 && heightOrWidth < scrollPositionDialog1 + 10 && dialog1HasBeenOpened === false) {
        $("#dialog1").dialog({
            buttons: [
                {
                    text: "Yes",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("Yes");
                        $(this).dialog("close"); // Pop up gaat weg

                        // start game
                        // TODO fade to black screen
                        // TODO open page 2
                    }
                },
                {
                    text: "No",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("No");
                        $(this).dialog("close"); // Pop up gaat weg

                        // roll credits
                        // TODO fade to black screen
                        // TODO open credits page
                    }
                },
            ],
            open: disableBodyScrolling,
            close: enableBodyScrolling
        }).dialog("widget").find(".ui-dialog-title").hide();

        dialog1HasBeenOpened = true;
    } else if (heightOrWidth > scrollPositionDialog2 - 10 && heightOrWidth < scrollPositionDialog2 + 10 && dialog2HasBeenOpened === false) {
        $("#dialog2").dialog({
            buttons: [
                {
                    text: "Take the risk",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("Take the risk");
                        $(this).dialog("close"); // Pop up gaat weg

                        // grab sword
                        // TODO open dialog: "oh no, the sword is cursed etc..."
                        // TODO add one "ok" button (or smth like that)
                    }
                },
                {
                    text: "I'll skip",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("I'll skip");
                        $(this).dialog("close"); // Pop up gaat weg
                    }
                },
            ],
            open: disableBodyScrolling,
            close: enableBodyScrolling
        }).dialog("widget").find(".ui-dialog-title").hide();

        dialog2HasBeenOpened = true;
    } else if (heightOrWidth > scrollPositionDialog3 - 10 && heightOrWidth < scrollPositionDialog3 + 10 && dialog3HasBeenOpened === false) {
        $("#dialog3").dialog({
            buttons: [
                {
                    text: "Eat it!",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("Eat it!");
                        $(this).dialog("close"); // Pop up gaat weg

                        // eat mushroom
                        // TODO open dialog: "wow, gave u extra strength" or whateva
                        // TODO add one "ok" button
                    }
                },
                {
                    text: "I hate mushrooms",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("I hate mushrooms");
                        $(this).dialog("close"); // Pop up gaat weg
                    }
                },
            ],
            open: disableBodyScrolling,
            close: enableBodyScrolling
        }).dialog("widget").find(".ui-dialog-title").hide();

        dialog3HasBeenOpened = true;
    } else if (heightOrWidth > scrollPositionDialog4 - 10 && heightOrWidth < scrollPositionDialog4 + 10 && dialog4HasBeenOpened === false) {
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

        dialog4HasBeenOpened = true;
    } else if (heightOrWidth > scrollPositionDialog5 - 10 && heightOrWidth < scrollPositionDialog5 + 10 && dialog5HasBeenOpened === false) {
        $("#dialog5").dialog({
            buttons: [
                {
                    text: "Return, duh",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("Return, duh");
                        $(this).dialog("close"); // Pop up gaat weg

                        // return gold
                        // TODO open credits page with confetti or something
                    }
                },
                {
                    text: "I could use it...",
                    click: function () { // Er wordt geklikt/keuze gemaakt
                        console.log("I could use it...");
                        $(this).dialog("close"); // Pop up gaat weg

                        // keep gold
                        // TODO fade hero into enemy
                        // TODO open credits page with sad music or something
                    }
                },
            ],
            open: disableBodyScrolling,
            close: enableBodyScrolling
        }).dialog("widget").find(".ui-dialog-title").hide();

        dialog5HasBeenOpened = true;
    }
}

// Deze voor verticale scroll pagina's
$(window).scroll(function () {
    const currentHeight = $(window).scrollTop();
    checkScrollPosition(currentHeight);
});

// Deze voor horizontale scrollpagina
$(window).scroll(function () {
    const currentWidth = $(window).scrollLeft();
    checkScrollPosition(currentWidth);
});