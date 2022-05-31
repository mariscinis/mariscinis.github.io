$('[lang="en"]').hide();

let imageHeight;
let difference;

$(window).on('load', function () {
    resize();

    $("html, body").animate({ scrollTop: $(document).height() }, 200, function() {
        $(".intro>.arrow-container").fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
    });
});

$(window).on('resize', function() {
    resize();
})

function resize() {
    imageHeight = $(".section-image").height();
    difference = $(window).height() - imageHeight;

    if (difference >= 400 && $(window).width() < 1200) {
        $(".section-background").height(difference);
        $(".section-text-container").height(difference - 100);
    }
}

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
