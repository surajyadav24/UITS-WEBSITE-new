
$(document).ready(function () {
  new WOW().init();
});

$(".slider").slick({
  autoplay: true,
  dots: false,
  arrows: true,
  focusOnSelect: false,
  pauseOnFocus: false,
  autoplaySpeed:1600,
  pauseOnFocus: false,
});

$(".slider-2").slick({
  autoplay: true,
  dots: false,
  arrows: true,
  autoplaySpeed:1600,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnFocus: false,
});

$(document).ready(function() {
  // Enable Bootstrap dropdown menu auto-closing behavior
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
});
$('.why-us-section').click(function(e) {
  e.preventDefault();


});

$(".slider-iamge-transform").slick({
  autoplay: true,
  vertical: true,
  dots: false,
  slidesToShow: 1,
  arrows: false,
  autoplaySpeed:2000,
  pauseOnHover:false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnFocus: false,
  responsive: [

    {
      breakpoint:426,
      settings: 'unslick',
    },
  ],
});






// var numbers = document.getElementsByClassName("number");
// var currentIndex = 0;

// setInterval(function() {
//   if (currentIndex >= 0) {
//     numbers[currentIndex].style.color = "transparent";
//   }
//   currentIndex = (currentIndex + 1) % numbers.length;
//   numbers[currentIndex].style.color = "#2f448f"; // 
//   if (currentIndex === 1) {
//     numbers[0].style.color = "transparent";
//   }
// }, 3000);

// var slideimages = document.getElementsByClassName("slide-img");

// for (var i = 0; i < slideimages.length; i++) {
//   var numbers= document.getElementsByClassName("number")
//   var slideimage = slideimages[i];
//   if (slideimage.classList.contains("slick-active")) {
//     numbers[0].classList.add("number-color"); 
//   }
// }
// var numbers = document.getElementsByClassName("number");
// var slideimages = document.getElementsByClassName("slide-img");

// for (var i = 0; i < slideimages.length; i++) {
//   var slideimage = slideimages[i];
//   if (slideimage.classList.contains("slick-active")) {
//     for (var j = 0; j < numbers.length; j++) {
//       numbers[j].classList.add("number-color"); 
//     }
//   }
// }

// var slickActiveElements = document.querySelectorAll('.slick-active');
// for (var i = 0; i < slickActiveElements.length; i++) {
//   var children = slickActiveElements[i].childNodes;
//   for (var j = 0; j < children.length; j++) {
//     // Manipulate the child elements here
//     children[j].style.color = 'red';
//   }
// }

