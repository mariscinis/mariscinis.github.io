$('[lang="en"]').hide();

$(window).ready(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, 50);
});

$("#lv").click(function() {
    $('[lang="en"]').hide();
    $('[lang="lv"]').show();
} )

$("#en").click(function() {
    $('[lang="lv"]').hide();
    $('[lang="en"]').show();
} )
