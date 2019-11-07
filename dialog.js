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

function attack() {
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

    if (healthBarEnemy > 0 && healthBarHero > 0) {
        disableBodyScrolling();
        setTimeout(function () {
            $("#dialog4").dialog("open");
        }, 2000)
    }
}

function fadePage() {
    $(document).ready(function () {
        $('#overlay').animate({
            opacity: 1,
        }, 4000, function () {
        });
    });
}

function goToPage(page) {
    window.setTimeout(function () {
        window.location.href = page;
    }, 5000);
}

function createButton(text, click) {
    return {
        text: text,
        click: function () {
            $(this).dialog("close");
            if (click) {
                click();
            }
        }
    }
}

const dialogsOpened = [];

function createDialog(dialogId, dialogNumber, buttons) {
    $("#" + dialogId).dialog({
        buttons: buttons,
        open: disableBodyScrolling,
        close: enableBodyScrolling
    }).dialog("widget").find(".ui-dialog-title").hide();

    dialogsOpened.push(dialogNumber);
}

// Om te checken of een dialog geopened is:
function dialogHasBeenOpened(number) {
    return dialogsOpened.includes(number);
}

const dialogOneButtons = [
    createButton('Yes', function () {
        // fadePage();
        // goToPage(''); // todo
    }),
    createButton('No', function () {
        fadePage();
        goToPage("credits.html");
    })
];

const dialogTwoButtons = [
    createButton('Take the risk', function () {
        swordGrabbed = true;
        createDialog('dialogGrabSword', 2, [createButton('Well, that sucks')]);
    }),
    createButton("I'll skip")
];

const dialogThreeButtons = [
    createButton('Eat it', function () {
        mushroomEaten = true;
        createDialog('dialogEatMushroom', 2, [createButton('Trippy!')]);
    }),
    createButton('I hate mushrooms')
];

const dialogFourButtons = [
    createButton('Use sword', function () {
        attack();
    }),
    createButton('Slap him', function () {
        attack();
    }),
    createButton('Scream at him', function () {
        attack();
    })
];

const dialogFiveButtons = [
    createButton('Return, duh', function () {
        fadePage();
        goToPage("credits.html");
    }),
    createButton('I could use it...', function () {
        // todo turn into enemy
        fadePage();
        goToPage("credits.html");
    })
];

// Deze moeten nog aangepast worden o.b.v. functies onderaan (handmatig)
const dialogs = [
    {
        scrollPosition: 200,
        id: 'dialog1',
        number: 1,
        buttons: dialogOneButtons
    },
    {
        scrollPosition: 400,
        id: 'dialog2',
        number: 2,
        buttons: dialogTwoButtons
    },
    {
        scrollPosition: 600,
        id: 'dialog3',
        number: 3,
        buttons: dialogThreeButtons
    },
    {
        scrollPosition: 800,
        id: 'dialog4',
        number: 4,
        buttons: dialogFourButtons
    },
    {
        scrollPosition: 1000,
        id: 'dialog5',
        number: 5,
        buttons: dialogFiveButtons
    }
];

function checkScrollPosition(heightOrWidth) {
    console.log(heightOrWidth);
    for (let i = 0; i < dialogs.length; i++) {
        const dialog = dialogs[i];
        if (heightOrWidth > dialog.scrollPosition - 10 && heightOrWidth < dialog.scrollPosition + 10 && dialogHasBeenOpened(dialog.number) === false) {
            createDialog(dialog.id, dialog.number, dialog.buttons);
        }
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