$(".nav-button").click(
    function(){
        $(".nav").toggleClass("border");
        $("#arrow").toggleClass("flip");
        $(".nav-rest").toggleClass("active");
    }
)