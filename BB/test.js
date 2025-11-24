
window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        $(".button").removeClass("hide");
        $(".nav-buttons").removeClass("hide");
        $(".nav-bar").removeClass("hide");
        $(".home").removeClass("show");
        $(".screen").removeClass("scroll")


    } else {
        $(".button").addClass("hide");
        $(".nav-buttons").addClass("hide");
        $(".nav-bar").addClass("hide");
        $(".home").addClass("show");
        $(".screen").addClass("scroll");
    }
});