// $(window).click(function() {
//     $('#medieval-music')[0].play();
// });

$(window).click(function() {
    $('#combat-music')[0].play();
});

const dialog = dialogs[3];
createDialog(dialog.id, dialog.number, dialog.buttons);