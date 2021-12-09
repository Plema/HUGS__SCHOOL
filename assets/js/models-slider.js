$(document).ready(function () {
  $('.models-slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    speed: 700,
    easing: 'linear',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    waitForAnimate: false,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  })
})
