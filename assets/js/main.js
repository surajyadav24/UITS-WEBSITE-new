
$(document).ready(function () {
  new WOW().init();
});

$(".slider").slick({
  autoplay: true,
  dots: false,
  arrows: true,
});

$(".slider-2").slick({
  autoplay: true,
  dots: false,
  arrows: true,
});




$(".slider-iamge-transform").slick({
  autoplay: true,
  vertical: true,
  dots: false,
  arrows: false,
  autoplaySpeed:2600,

});


var numbers = document.getElementsByClassName("number");
var currentIndex = 0;

setInterval(function() {
  if (currentIndex >= 0) {
    numbers[currentIndex].style.color = "transparent";
  }
  currentIndex = (currentIndex + 1) % numbers.length;
  numbers[currentIndex].style.color = "#2f448f"; // 
  if (currentIndex === 1) {
    numbers[0].style.color = "transparent";
  }
}, 3000);






