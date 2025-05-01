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
  $("#daymode").click(function(){
      let img = $("#logo-port");
      let currentSrc = img.attr("src");


      if (currentSrc === "logo-blue.png") {
          img.attr("src", "logo-l-blue.png");
      } else {
          img.attr("src", "logo-blue.png");
      }
  });
  $("#daymode").click(function(){
    let img = $("#light-mode");
    let currentSrc = img.attr("src");


    if (currentSrc === "day mode.png") {
        img.attr("src", "night mode.png");
    } else {
        img.attr("src", "day mode.png");
    }
  });
  $("#daymode").click(function(){
    let img = $("#ham-1");
    let currentSrc = img.attr("src");


    if (currentSrc === "hamburger-lightblue.png") {
        img.attr("src", "hamburger-blue.png");
    } else {
        img.attr("src", "hamburger-lightblue.png");
    }
  });
  $("#daymode").click(function(){
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


//lightbox-2+galleries

const galleries = {
  project1: [
    "project-1/mini-booklet.pdf",
  ],
  project2: [
    "project-2/unconventional-love-poster.jpg",
    "project-2/booklet.pdf"
  ],
  project3: [
    "project-3/project-3.pdf"
  ],
  project4: [
    "project-4/accordion.pdf",
    "project-4/singlepage.pdf"
  ],
  project5: [
    "project-5/cyan-book-pages.pdf"

  ],
  project6: [
    "project-6/mark-making-digital.pdf",
    "project-6/Mark-Making-Scans.pdf"

  ],
  project7: [
    "project-7/abstract.pdf"

  ],
  project8: [
    "project-8/TCA.pdf"

  ],
  project9: [
    "project-9/1.jpg",
    "project-9/2.jpg",
    "project-9/3.jpg",
    "project-9/4.jpg",

  ],
  project10: [
    "cafe-condor.jpg",
    "project-10/billboard.jpg",
    "project-10/brand-manual.jpg",
    "project-10/tins.jpg",

  ],
  project11: [

  ],
  project12: [
    
  ],
  // add more projects as needed
};

let currentGallery = [];
let currentIndex = 0;

$(".project").click(function () {
  const galleryKey = $(this).data("gallery");
  currentGallery = galleries[galleryKey] || [];
  currentIndex = 0;
  const file = currentGallery[currentIndex];

  if (file.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file).show();
  }

  $("#lightbox-2").fadeIn();
});

$("#prev").click(function () {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  const file = currentGallery[currentIndex];
  if (file.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file).show();
  }
});

$("#next").click(function () {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  const file = currentGallery[currentIndex];
  if (file.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file).show();
  }
});

$(".close").click(function () {
  $("#lightbox-2").fadeOut();
});