$(document).ready(function() {
    $(".someContent").hover( function() {
            $(this).toggleClass("highLight");
        }
        , function() {
            $(this).toggleClass("highLight");
        });
})