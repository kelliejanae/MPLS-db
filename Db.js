//Code for restricted page 
$(document).ready(function() {

  $(function() {
    $('.restrict-heading').click(function() {
      $('.restrict-inner').slideUp('normal');
      $('.restrict-heading').removeClass('acc-active');
      if ($(this).next().is(':visible') == true) {
        $('.restrict-heading').removeClass('active');
      }
      if ($(this).next().is(':hidden') == true) {
        $(this).next().slideDown('fast');
        $(this).addClass('acc-active');
      }
      $('.restrict-inner').one().removeClass('show');
    });

    $('.restrict-inner').hide();
    $('.show').show();
  });

//New Resources Slider 


var currentSlide = 0;
var $slides = $('.restrict-slider .restrict-newicon');
var $totalSlides = $slides.length;


// Hides all slides, Displays Current index
function cycleSlides() {
  // stores current slide
  var $slide = $('.restrict-slider .restrict-newicon').eq(currentSlide);
  // hides all slides
  $slides.hide();
  // display current slide
  $slide.css('display', 'inline-block');
}

// call click function when next button is clicked
$('.restrict-next').click(function() {
  // update current slide index
  currentSlide += 1;
  // if on last slide, resent index to 0
  if (currentSlide > $totalSlides - 1) {
    currentSlide = 0;
  }
  // run cycle slides function to display slide
  cycleSlides();
});

// call click function when prev button is clicked
$('.restrict-prev').click(function() {
  // update current slide index
  currentSlide -= 1;
  // if on first slide, move to last slide
  if (currentSlide < 0) {
    currentSlide = $totalSlides - 1;
  }
  // run cycle slides function to display slide
  cycleSlides();
});

});


