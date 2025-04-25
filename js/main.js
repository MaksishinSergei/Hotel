// main slider

$(function(){
    $('.hotel__slider').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000
    });

});

// calendar

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

// slider with info

$('.info__slider').slick({
    arrows: true,
    prevArrow: '<img class="arrow arrow-left" src="images/Arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="images/Arrow-right.svg" alt="">',
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplayspeed: 1500,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 890,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 415,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

// child -/+

$(document).ready(function() {
      $('.plus').click(function () {
          var $input = $(this).parent().find('input');
          $input.val(parseInt($input.val()) + 1);
          $input.change();
          return false;
      });
  });


  
  $('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
  });

  // Apartaments

  $('.aps__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 2000
  });