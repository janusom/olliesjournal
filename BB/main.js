$("#bb").click(
    function(event){
        event.stopPropagation();
        $(".screen-nav").toggleClass("active");
        $("#bb").toggleClass("active");
    }
)

$(".nav-button").click(
    function(){
        $(".nav").toggleClass("border");
        $("#arrow").toggleClass("flip");
        $(".nav-rest").toggleClass("active");
    }
)