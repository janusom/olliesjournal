$(".modebutton").click(
  function(){
  $(".container").toggleClass("day");
  $(".button").toggleClass("day");
  $(".button-round").toggleClass("day");
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

$(".ham").click(
  function(){
  $(".nav").toggleClass("active");
  $(".ham").toggleClass("active");
  $(".animation-box").toggleClass("active");
    
  });

  $(".swap-ham").click(
    function(){
    $(".nav").removeClass("active");
    $(".ham").removeClass("active");
    $(".animation-box").removeClass("active");
  }); 

$(document).ready(function(){
  $("#daymode").click(function(){
      let img = $("#logo");
      let currentSrc = img.attr("src");

      if (currentSrc === "Logo.png") {
          img.attr("src", "logo-blue.png");
      } else {
          img.attr("src", "Logo.png");
      }
  });
});

$(document).ready(function(){
  $("#daymode").click(function(){
    let current = $(this).text();
    $(this).text(current === "☼" ? "☾" : "☼");
  });
});

// portfolio daymode

$(".mode-btn").click(
  function(){
  $("body").toggleClass("day");
  $(".gradient").toggleClass("day");
  $(".info-1").toggleClass("day");
  $(".title").toggleClass("day");
  $(".category").toggleClass("day");
  $(".layout-button").toggleClass("day");
});

$(document).ready(function(){
  $("#daymode-port").click(function(){
      let img = $("#logo-port");
      let currentSrc = img.attr("src");


      if (currentSrc === "logo-blue.png") {
          img.attr("src", "Logo-l-blue.png");
      } else {
          img.attr("src", "logo-blue.png");
      }
  });
  $("#daymode-port").click(function(){
    let img = $("#light-mode");
    let currentSrc = img.attr("src");


    if (currentSrc === "day mode.png") {
        img.attr("src", "night mode.png");
    } else {
        img.attr("src", "day mode.png");
    }
  });
  $("#daymode-port").click(function(){
    let img = $("#ham-1");
    let currentSrc = img.attr("src");


    if (currentSrc === "hamburger-lightblue.png") {
        img.attr("src", "hamburger-blue.png");
    } else {
        img.attr("src", "hamburger-lightblue.png");
    }
  });
  $("#daymode-port").click(function(){
    let img = $("#ham-2");
    let currentSrc = img.attr("src");
    if (currentSrc === "hamburger-blue.png") {
        img.attr("src", "hamburger-lightblue.png");
    } else {
        img.attr("src", "hamburger-blue.png");
    }
  });
});


 
// lightbox

$(document).ready(function() {
  let images = $(".left-side-thumbnail img, .top-side-thumbnail img, .bot-side-thumbnail img, .left-side-thumbnail-2 img, .top-side-thumbnail-2 img, .bot-side-thumbnail-2 img, .left-side-thumbnail-3 img, .top-side-thumbnail-3 img, .bot-side-thumbnail-3 img").map(function() {
    return $(this).attr("src");
  }).get();

  let currentIndex = 0;

  $(".left-side-thumbnail img, .top-side-thumbnail img, .bot-side-thumbnail img, .left-side-thumbnail-2 img, .top-side-thumbnail-2 img, .bot-side-thumbnail-2 img, .left-side-thumbnail-3 img, .top-side-thumbnail-3 img, .bot-side-thumbnail-3 img").click(function() {
    let clickedSrc = $(this).attr("src");
    currentIndex = images.indexOf(clickedSrc);
    $("#lightbox-img").attr("src", clickedSrc);
    $("#lightbox").fadeIn();
  });

  $(".close").click(function() {
    $("#lightbox").fadeOut();
  });

  $("#prev").click(function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $("#lightbox-img").attr("src", images[currentIndex]);
  });

  $("#next").click(function() {
    currentIndex = (currentIndex + 1) % images.length;
    $("#lightbox-img").attr("src", images[currentIndex]);
  });
});