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
    { src: "project-1/mini-booklet.pdf", title: "Leave Behind", caption: "A zine-style, unfolding,leave-behind booklet to give employers after an interview or introduction." }
  ],
  project2: [
    { src: "project-2/unconventional-love-poster.jpg", title: "Unconventional Love", caption: "Poster for a self-published, curatorial booklet about jewelry." },
    { src: "project-2/booklet.pdf", title: "Unconventional Love Booklet", caption: "PDF copy of the Unconventional Love booklet." }
  ],
  project3: [
    { src: "project-3/project-3.pdf", title: "You want it? Work for it.", caption: "Publication that explores work ethic, grit, womanhood, and a mother-daughter relationship." }
  ],
  project4: [
    { src: "project-4/accordion.pdf", title: "We Are Everything", caption: "Accordion style booklet. Its theme explored unity, togetherness, love,and the human role in the universe"},
    { src: "project-4/singlepage.pdf", title: "We Are Everything - Single Page Version", caption: "Single page Version of the PDF for better digital readability." }
  ],
  project5: [
    { src: "project-5/cyan-book-pages.pdf", title: "Cyan Cohort Book Contribution", caption: "My pages from the Fall VCUarts GDES 2024 Cyan Cohort book. It explores navigating life and reflecting on one's journey. This is the origin and first appearance of my current brand's visual direction" }
  ],
  project6: [
    { src: "project-6/mark-making-digital.pdf", title: "Mark-Making Project Pamphlet", caption: "Digital copy of the mark making project synthesis booklet. Project details within booklet itself." },
    { src: "project-6/Mark-Making-Scans.pdf", title: "Mark Making Scans", caption: "Scanned version of the mark making booklet." }
  ],
  project7: [
    { src: "project-7/abstract.pdf", title: "Abs-tr-act", caption: "Small-scale zine about abstract art and poetry. Designed under one hour with scans from books at the James Branch Cabell Library." }
  ],
  project8: [
    { src: "project-8/TCA.pdf", title: "The Collective Archive", caption: "Collaborative Risograph Booklet. Authored spreads: 3, 6, and 7" }
  ],
  project9: [
    { src: "project-9/1.jpg", title: "Character creation and wearables. Anix: a very unlucky but powerful thief", caption: "Slide introducing my fictional character and her wearables. This was an assignment for Space Research at VCUart's art foundation." },
    { src: "project-9/2.jpg", title: "Anix. Character Card Front", caption: "The front of Anix's character card, featuring her, wearing all of her wearables." },
    { src: "project-9/3.jpg", title: "Anix. Character Card. Back (details).", caption: "Details about Anix's character and artifacts." },
    { src: "project-9/4.jpg", title: "Anix Progress Slides.", caption: "Slide that accompanied my design process presentation." }
  ],
  project10: [
    { src: "cafe-condor.jpg", title: "Cafe Condor", caption: "Cafe Condor is an Identity System I developed for my Graphic Design I class at SCCC (Fall 2022). The logo features the Andean Condor to communicate the grandness of Peruvian coffee and culture." },
    { src: "project-10/billboard.jpg", title: "Billboard", caption: "Billboard design." },
    { src: "project-10/brand-manual.jpg", title: "Brand Manual", caption: "Brand manual document." },
    { src: "project-10/tins.jpg", title: "Tins", caption: "Packaging tins design." }
  ],
  project11: [
    { src: "project-11/cover.jpg", title: "The Perfect Husband Alternate Cover", caption: "Mock-up of alternate cover" },
    { src: "project-11/1.jpg", title: "Iterations", caption: "Iteration." },
    { src: "project-11/2.jpg", title: "Iterations", caption: "Iteration." },
    { src: "project-11/3.jpg", title: "Iterations", caption: "Iteration." },
    { src: "project-11/4.jpg", title: "Iterations", caption: "Iteration." },
    { src: "project-11/5.jpg", title: "Iterations", caption: "Iteration." },
    { src: "project-11/6.jpg", title: "Iterations", caption: "Iteration." }
  ],
  project12: [
    { src: "best-of-molchatdoma.png", title: "Alternate Best of Molchat Doma CD cover", caption: "Student project for a speculative Best Of compilation of Molchat Doma." }
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

  if (file.src.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file.src).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file.src).show();
  }
  $("#title").text(file.title || "");
  $("#caption").text(file.caption || "");

  $("#lightbox-2").fadeIn();
});

$("#prev").click(function () {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  const file = currentGallery[currentIndex];
  if (file.src.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file.src).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file.src).show();
  }
  $("#title").text(file.title || "");
  $("#caption").text(file.caption || "");
});

$("#next").click(function () {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  const file = currentGallery[currentIndex];
  if (file.src.endsWith(".pdf")) {
    $("#lightbox2-img").hide();
    $("#lightbox2-pdf").attr("src", file.src).show();
  } else {
    $("#lightbox2-pdf").hide();
    $("#lightbox2-img").attr("src", file.src).show();
  }
  $("#title").text(file.title || "");
  $("#caption").text(file.caption || "");
});

$(".close").click(function () {
  $("#lightbox-2").fadeOut();
});