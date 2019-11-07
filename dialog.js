// Deze moeten nog aangepast worden o.b.v. functies onderaan (handmatig, nog console.log toevoegen daar)
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

function enableBodyScrolling() {
    $('#disableScrollDiv').css({
        display: "hidden"
    });

    $('body').css({
        overflow: "auto"
    });
}

let healthBarHero = 100;
let healthBarEnemy = 100;
const mathMax = 31;
const mathMin = 5;
let mushroomEaten = false;
let swordGrabbed = false;

// Get random integer for amount of damage
function getRandomInt() {
    return Math.floor(Math.random() * (mathMax - mathMin) + mathMin);
}

function checkScrollPosition(heightOrWidth) {
    console.log(heightOrWidth);
    if (heightOrWidth > scrollPositionDialog1 - 10 && heightOrWidth < scrollPositionDialog1 + 10 && dialog1HasBeenOpened === false) {
        $("#dialog1").dialog({
            buttons: [
                {
                    text: "Yes",
                    click: function () {
                        console.log("Yes");
                        $(this).dialog("close");

                        // $(document).ready(function () {
                        //     $('#overlay').animate({
                        //         opacity: 1,
                        //     }, 4000, function () {
                        //     });
                        // });
                        //
                        // window.setTimeout(function () {
                        //     window.location.href = ""; // TODO link to pg. 2
                        // }, 5000);
                    }
                },
                {
                    text: "No",
                    click: function () {
                        console.log("No");
                        $(this).dialog("close");

                        $(document).ready(function () {
                            $('#overlay').animate({
                                opacity: 1,
                            }, 4000, function () {
                            });
                        });

                        window.setTimeout(function () {
                            window.location.href = ""; // TODO link to credits page
                        }, 5000);
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
                    click: function () {
                        console.log("Take the risk");
                        swordGrabbed = true;
                        $(this).dialog("close");

                        $("#dialogGrabSword").dialog({
                            buttons: [
                                {
                                    text: "Well, that sucks",
                                    click: function () {
                                        $(this).dialog("close");
                                    }
                                }
                            ]
                        })
                    }
                },
                {
                    text: "I'll skip",
                    click: function () {
                        console.log("I'll skip");
                        $(this).dialog("close");
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
                    click: function () {
                        console.log("Eat it!");
                        $(this).dialog("close");

                        mushroomEaten = true;
                        $("#dialogEatMushroom").dialog({
                            buttons: [
                                {
                                    text: "Trippy!",
                                    click: function () {
                                        $(this).dialog("close");
                                    }
                                }
                            ]
                        })
                    }
                },
                {
                    text: "I hate mushrooms",
                    click: function () {
                        console.log("I hate mushrooms");
                        $(this).dialog("close");
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
                    click: function () {
                        console.log("Use sword");
                        $(this).dialog("close");
                        // TODO add attack visual for 1.5/2 sec

                        let randomInt = getRandomInt();
                        if (swordGrabbed) {
                            randomInt = Math.round(randomInt * 0.9);
                        }

                        if (mushroomEaten) {
                            randomInt = Math.round(randomInt * 1.1);
                        }
                        healthBarEnemy = healthBarEnemy - randomInt;
                        console.log("Health bar enemy = " + healthBarEnemy);

                        if (healthBarEnemy > 0 || healthBarHero > 0) {
                            setTimeout(function () {
                                $("#dialog4").dialog("open");
                            }, 2000)
                        }
                    }
                },
                {
                    text: "Slap him",
                    click: function () {
                        console.log("Slap him");
                        $(this).dialog("close");
                        // TODO add attack visual for 1.5/2 sec

                        let randomInt = getRandomInt();
                        if (swordGrabbed) {
                            randomInt = Math.round(randomInt * 0.9);
                        }

                        if (mushroomEaten) {
                            randomInt = Math.round(randomInt * 1.1);
                        }
                        healthBarEnemy = healthBarEnemy - randomInt;
                        console.log("Health bar enemy = " + healthBarEnemy);

                        if (healthBarEnemy > 0 || healthBarHero > 0) {
                            setTimeout(function () {
                                $("#dialog4").dialog("open");
                            }, 2000)
                        }
                    }
                },
                {
                    text: "Scream at him",
                    click: function () {
                        console.log("Scream at him");
                        $(this).dialog("close");
                        // TODO add attack visual for 1.5/2 sec

                        let randomInt = getRandomInt();
                        if (swordGrabbed) {
                            randomInt = Math.round(randomInt * 0.9);
                        }

                        if (mushroomEaten) {
                            randomInt = Math.round(randomInt * 1.1);
                        }
                        healthBarEnemy = healthBarEnemy - randomInt;
                        console.log("Health bar enemy = " + healthBarEnemy);

                        if (healthBarEnemy > 0) {
                            setTimeout(function () {
                                $("#dialog4").dialog("open");
                            }, 2000)
                        }
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
                    click: function () {
                        console.log("Return, duh");
                        $(this).dialog("close");

                        $(document).ready(function () {
                            $('#overlay').animate({
                                opacity: 1,
                            }, 4000, function () {
                            });
                        });

                        window.setTimeout(function () {
                            window.location.href = ""; // TODO link to happy credits page
                        }, 5000);
                    }
                },
                {
                    text: "I could use it...",
                    click: function () {
                        console.log("I could use it...");
                        $(this).dialog("close");

                        $(document).ready(function () {
                            $('#overlay').animate({
                                opacity: 1,
                            }, 4000, function () {
                            });
                        });
                        // open credits page
                        window.setTimeout(function () {
                            window.location.href = ""; // TODO link to sad credits page
                        }, 5000);
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