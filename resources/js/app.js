$('[lang="en"]').hide();

$(window).on('load', function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 30);
});

$("#lv").click(function() {
    $('[lang="en"]').hide();
    $('[lang="lv"]').show();
} )

$("#en").click(function() {
    $('[lang="lv"]').hide();
    $('[lang="en"]').show();
} )
