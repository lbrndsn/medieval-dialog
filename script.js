$(document).ready(function () {
    $("body").prepend("<div id='overlay'></div>");
    $("body").prepend("<div class='game'></div>");
    $(".game").append("<div class='adventurer-container'></div>");
    $(".adventurer-container").append("<div class='adventurer'></div>");

    if (window.location.pathname.match('index')) {
        $(".game").addClass("kingdom");

        $(".game.kingdom").prepend("<div class='intro-scroll'></div>");

        $(".game.kingdom .intro-scroll").prepend("<div class='background-title'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-1'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-2'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-3'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-4'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-5'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<div class='layer-6'></div>");
        $(".game.kingdom .intro-scroll .background-title").append("<img src='img/logo.png' id='logo'>");

        $(".game.kingdom .intro-scroll").append("<div class='intro-text'></div>");
        $(".game.kingdom .intro-scroll .intro-text").prepend("<p id='intro-text-p'></p>");

        $(".game.kingdom").append("<div class='kingdom' id='game'></div>");

        $(".game.kingdom .kingdom").prepend("<div class='king'></div>");
        $(".game.kingdom .kingdom").prepend("<div id='dialog1'><p>So, what do you say? Will you help your kingdom one last time?</p></div>");
        $(".game.kingdom .kingdom").prepend("<div class='floor'></div>");
        $(".game.kingdom .kingdom").prepend("<div class='chandeliers'></div>");
        $(".game.kingdom .kingdom .chandeliers").prepend("<div class='chandelier'><img src='img/chandelier.gif' alt=''/></div>");
        $(".game.kingdom .kingdom .chandeliers").prepend("<div class='chandelier'><img src='img/chandelier.gif' alt=''/></div>");
        $(".game.kingdom .kingdom .chandeliers").prepend("<div class='chandelier'><img src='img/chandelier.gif' alt=''/></div>");


        var hero_anchor = $('.adventurer').offset().top - screen.height + 100;
        var intro_anchor = $('.intro-scroll').height() - screen.height + 100;
        var text_anchor = $('#intro-text-p').offset().top - screen.height + 100;

        $(window).on('scroll.togame', function () {
            if ($(window).scrollTop() >= intro_anchor) {
                $(window).scrollTop(intro_anchor);
            }
            $("#yes").click(function () {
                $("html").css("scroll-behavior", "smooth");
                intro_anchor += intro_anchor
            });
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > hero_anchor) {
                $('.adventurer').addClass("walking");
            }
        });

        $('.adventurer').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
            $(this).removeClass("walking");
            $(this).addClass("idle");
        });


        $(window).on('scroll.text', function () {
            if ($(window).scrollTop() > text_anchor) {
                setTimeout(function () {
                    typeText(text, 0);
                }, 1000)
                $(window).off('scroll.text');
            }
        });


    }
    if (window.location.pathname.match('main_game')) {
        $(".game").addClass("main");

        $(".adventurer-container").addClass("main-game");

        $(".game.main").append("<div class='slide countryside'></div>");
        $(".game.main").append("<div class='slide forest'></div>");
        $(".game.main").append("<div class='transition-fence'></div>");
        $(".slide.countryside").append("<div class='header-bg2'></div>");
        $(".slide.countryside").append("<div class='header-bg3'></div>");
        $(".slide.countryside").append("<div class='header-bg4'></div>");
        $(".slide.countryside").append("<div class='boom'></div>");
        $(".slide.countryside").append("<div class='header-bg5'></div>");
        $(".slide.countryside").append("<div class='mushroom'></div>");

        $(".slide.forest").append("<div class='header2-bg2'></div>");
        $(".slide.forest").append("<div class='header2-bg3'></div>");
        $(".slide.forest").append("<div class='header2-bg4'></div>");
        $(".slide.forest").append("<div class='header2-bg5'></div>");
        $(".slide.forest").append("<div class='header2-bg6'></div>");
        $(".slide.forest").append("<div class='header2-bg8'></div>");
        $(".slide.forest").append("<div class='sun'></div>");
        $(".slide.forest").append("<div class='sword'></div>");
        $(".slide.forest").append("<div class='enemy'></div>");
        $(".slide.forest").append("<div class='header2-bg9'></div>");
    }
    if (window.location.pathname.match('battle')) {
        $(".game").addClass("battle");

        $(".game.battle").append("<div class='enemy-container'></div>");

        $(".game.battle .adventurer-container").prepend("<div class='health-bar-container'></div>");
        $(".game.battle .adventurer").addClass("battle");

        $(".game.battle").append("<div class='background-container'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg2'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg3'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg4'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg5'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg6'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg7'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg8'></div>");
        $(".game.battle .background-container").append("<div class='forest-header-bg9'></div>");

        $(".enemy-container").prepend("<div class='health-bar-container'></div>");
        $(".enemy-container").append("<div class='enemy battle'></div>");

        $(".health-bar-container").prepend("<img src='img/health_bar_decoration.png' class='health-bar-outline'>")
        $(".health-bar-container").append("<img src='img/health_bar.png' class='health-bar'>")
        $('.enemy-container .health-bar-container .health-bar').attr('id', 'enemy-health-bar');
        $('.adventurer-container .health-bar-container .health-bar').attr('id', 'adventurer-health-bar');

        $('.adventurer.battle').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
            $(this).removeClass("attack-punch");
            $(this).removeClass("scream");
            $(this).removeClass("attack");
        });

        $('.enemy.battle').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
            $(this).removeClass("attack");

        });

    }
    if (window.location.pathname.match('cave')) {
        $(function () {
            $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 0);
        });
        $(".game").addClass("cave");
        $(".adventurer-container .adventurer").addClass("in-cave");

        $(".game.cave").append("<div class='background-title'></div>");
        $(".game.cave .background-title").append("<div class='layer-1'></div>");
        $(".game.cave .background-title").append("<div class='layer-2'></div>");
        $(".game.cave .background-title").append("<div class='layer-3'></div>");
        $(".game.cave .background-title").append("<div class='layer-4'></div>");
        $(".game.cave .background-title").append("<div class='layer-5'></div>");
        $(".game.cave").append("<div class='transition'></div>");
        $(".game.cave").append("<div class='cave'></div>");
        $(".game.cave .cave").append("<div class='cave-bg'></div>");
        $(".game.cave .cave").append("<div class='cave-floor'></div>");
        $(".game.cave .cave").append("<div class='chest'></div>");
        $(".game.cave .cave").append("<div id ='dialog5'><p>You got the gold back. Let's return it! Or... keep it for ourselves?</p></div>");
        $('.adventurer.in-cave').addClass("walking");


        $('.adventurer').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
            $(this).removeClass("walking");
            $(this).addClass("morph");
        });

    }
});


// Disable scrolling when dialog is opened
function disableBodyScrolling() {
    $('#disableScrollDiv').css({
        display: "block"
    });

    $('body').css({
        overflow: "hidden"
    });
}

// Enable scrolling when dialog is closed
function enableBodyScrolling() {
    $('#disableScrollDiv').css({
        display: "hidden"
    });

    $('body').css({
        overflowX: "auto",
        overflowY: "hidden"
    });
}

let healthBarHero = 100;
let healthBarEnemy = 0;

let mushroomEaten = false;
let swordGrabbed = false;

// Get random integer for amount of damage
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function attack() {
    let randomInt = getRandomInt(5, 31);
    if (swordGrabbed) {
        randomInt = Math.round(randomInt * 0.9);
    }

    if (mushroomEaten) {
        randomInt = Math.round(randomInt * 1.1);
    }

    healthBarEnemy = healthBarEnemy - randomInt;
    $('#enemy-health-bar').css("width", "calc(" + healthBarEnemy + "% - 22px)");
    console.log("> Health bar enemy = " + healthBarEnemy);

    if (healthBarEnemy > 20 && healthBarHero > 20) {
        disableBodyScrolling();
        setTimeout(function () {
            healthBarHero = healthBarHero - getRandomInt(5, 21);
            $('#adventurer-health-bar').css("width", "calc(" + healthBarHero + "% - 22px)");
            $('.enemy').addClass("attack");
            console.log(healthBarHero);
        }, 2000);
        setTimeout(function () {
            $("#dialog4").dialog("open");
        }, 4000);
    } else {
        $('.enemy.battle').removeClass('battle');
        $('.enemy').addClass('dead');
        setTimeout(function () {
            $('.enemy-container .health-bar-container').remove();
            $('.adventurer-container .health-bar-container').remove();
            $('.adventurer.battle').removeClass('battle');
            $('.adventurer').addClass('cave-in');
            $('.adventurer.cave-in').addClass('walking');
        }, 2000);
        setTimeout(function () {
            fadePage();
            goToPage("cave.html");
        }, 2000);
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
        dialogClass: dialogId,
        open: disableBodyScrolling,
        close: enableBodyScrolling
    }).dialog("widget").find(".ui-dialog-title").hide();

    dialogsOpened.push(dialogNumber);
}

// To check if dialog has been opened
function dialogHasBeenOpened(number) {
    return dialogsOpened.includes(number);
}

const dialogOneButtons = [
    createButton('Yes', function () {
        fadePage();
        goToPage('main_game.html');
    }),
    createButton('No', function () {
        fadePage();
        goToPage("credits.html");
    })
];

const dialogTwoButtons = [
    createButton('Take the risk', function () {
        swordGrabbed = true;
        $('.sword').fadeOut('fast');
        createDialog('dialogGrabSword', 2, [createButton('Well, that sucks')]);
    }),
    createButton("I'll skip")
];

const dialogThreeButtons = [
    createButton('Eat it', function () {
        mushroomEaten = true;
        $('.mushroom').fadeOut('fast');
        createDialog('dialogEatMushroom', 3, [createButton('Trippy!')]);
    }),
    createButton('I hate mushrooms')
];

const dialogFourButtons = [
    createButton('Use sword', function () {
        attack();
        $('.adventurer.battle').addClass("attack");
    }),
    createButton('Slap him', function () {
        attack();
        $('.adventurer.battle').addClass("attack-punch");
    }),
    createButton('Scream at him', function () {
        attack();
        $('.adventurer.battle').addClass("scream");
    })
];

let couldUseIsClicked = false;

const dialogFiveButtons = [
    createButton('Return, duh', function () {
        setTimeout(function () {
            var percentageToScroll = 100;
            var percentage = percentageToScroll / 100;
            var height = $(document).scrollTop();
            var scrollAmount = height * (1 - percentage);

            $('html,body').animate({
                scrollTop: scrollAmount
            }, 5000, function () {
            });
        }, 1000);

        setTimeout(function () {
            fadePage();
            goToPage("credits.html");
        }, 6000);
    }),
    createButton('I could use it...', function () {
        couldUseIsClicked = true;
        $('.chest').addClass("open");

        setTimeout(function () {
            $('.adventurer.in-cave').addClass('evil');
        }, 1000);

        setTimeout(function () {
            if (couldUseIsClicked === true) {
                var percentageToScroll = 100;
                var percentage = percentageToScroll / 100;
                var height = $(document).scrollTop();
                var scrollAmount = height * (1 - percentage);

                $('html,body').animate({
                    scrollTop: scrollAmount
                }, 5000, function () {
                });
            }
        }, 5500);

        setTimeout(function () {
            fadePage();
            goToPage("credits.html");
        }, 10000);
    })
];

const dialogSixButtons = [
    createButton('Fight him!', function () {
        fadePage();
        goToPage("battle.html");
    })
];

// Deze moeten nog aangepast worden o.b.v. functies onderaan (handmatig)
const dialogs = [
    {
        scrollPosition: 1300,
        id: 'dialog1',
        number: 1,
        buttons: dialogOneButtons
    },
    {
        scrollPosition: 3360,
        id: 'dialog2',
        number: 2,
        buttons: dialogTwoButtons
    },
    {
        scrollPosition: 440,
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
        scrollPosition: 2158.75,
        id: 'dialog5',
        number: 5,
        buttons: dialogFiveButtons
    },
    {
        scrollPosition: 5000,
        id: 'dialog6',
        number: 6,
        buttons: dialogSixButtons
    }
];

function checkScrollPosition(heightOrWidth) {
    console.log(heightOrWidth);
    for (let i = 0; i < dialogs.length; i++) {
        const dialog = dialogs[i];
        if (dialog.number === 1) {
            if (heightOrWidth > dialog.scrollPosition - 50 && heightOrWidth < dialog.scrollPosition + 50 && dialogHasBeenOpened(dialog.number) === false) {
                setTimeout(function () {
                    createDialog(dialog.id, dialog.number, dialog.buttons);
                }, 5000);
            }
        } else {
            if (dialog.number === 5) {
                if (dialogsOpened.includes(5)) {
                    return
                } else {
                    setTimeout(function () {
                        createDialog(dialog.id, dialog.number, dialog.buttons);
                    }, 9000);
                }
            } else {
                if (heightOrWidth > dialog.scrollPosition - 100 && heightOrWidth < dialog.scrollPosition + 100 && dialogHasBeenOpened(dialog.number) === false) {
                    createDialog(dialog.id, dialog.number, dialog.buttons);
                }
            }
        }
    }
}

// Vertical
$(window).scroll(function () {
    const currentHeight = $(window).scrollTop();
    checkScrollPosition(currentHeight);
});

// Horizontal
$(window).scroll(function () {
    const currentWidth = $(window).scrollLeft();
    checkScrollPosition(currentWidth);
});

// BATTLE JS
$(window).click(function () {
    $('#combat-music')[0].play();
});

const dialog = dialogs[3];
createDialog(dialog.id, dialog.number, dialog.buttons);