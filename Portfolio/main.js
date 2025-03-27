$(".modebutton").click(
  function(){
  $(".container").toggleClass("day");
  $(".button").toggleClass("day");
  $(".modebutton").toggleClass("day");
  $(".gradient").toggleClass("day");
  $(".item").toggleClass("day");
  $("body").toggleClass("day");
  $(".animation-box").toggleClass("day");
  $(".credit").toggleClass("day");
  $(".orbless").toggleClass("day");
  $(".logo-box").toggleClass("day");
  $(".texture").toggleClass("day");
});

$(document).ready(function(){
  $("#daymode").click(function(){
      let img = $("#logo");
      let currentSrc = img.attr("src");

      // Toggle between the two images
      if (currentSrc === "Logo.png") {
          img.attr("src", "logo-black.png");
      } else {
          img.attr("src", "Logo.png");
      }
  });
});