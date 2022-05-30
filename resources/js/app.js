$('[lang="en"]').hide();

let imageHeight = $(".section-image").height();
let difference = $(window).height() - imageHeight;

$(window).on('load', function () {
    if (difference >= 400) {
        $(".section-background").height(difference);
        $(".section-text-container").height(difference - 100);
    }

    $("html, body").animate({ scrollTop: $(document).height() }, 30);
    $(".intro>.arrow-container").fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
});

$(".arrow-container").on('click', function(event) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".image" + event.target.id).offset().top - difference
    }, 1000);
});

$("#lv").click(function() {
    $('[lang="en"]').hide();
    $('[lang="lv"]').show();
} )

$("#en").click(function() {
    $('[lang="lv"]').hide();
    $('[lang="en"]').show();
} )
