$('[lang="en"]').hide();

$( document ).ready(function() {
    window.scrollTo(0, document.body.scrollHeight);
});

$("#lv").click(function() {
    $('[lang="en"]').hide();
    $('[lang="lv"]').show();
} )

$("#en").click(function() {
    $('[lang="lv"]').hide();
    $('[lang="en"]').show();
} )
