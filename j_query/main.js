$(".dark-btn").click(
  function(){
  $(".square").toggleClass("dark");
  $("body").toggleClass("dark");
});

$(".spin-btn").click(
  function(){
  $(".square").toggleClass("spin")
});

$(".reveal-btn").click(
  function(){
  $(".lion").addClass("reveal")
  $(".reveal-btn").hide();
});

$(function(){
  $(".draggable").draggable()
});