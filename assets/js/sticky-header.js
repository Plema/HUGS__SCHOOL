$(function () {
  var body_scroll = $(document).scrollTop()
  var changed_header = $('.header').outerHeight()
  if ($(window).width() <= 5000) {
    $(window).scroll(function () {
      var watch_scroll = $(document).scrollTop()

      if (watch_scroll > changed_header) {
        $('.header').addClass('hide-header')
      } else {
        $('.header').removeClass('hide-header')
      }

      if (watch_scroll > body_scroll) {
        $('.header').removeClass('show-header')
      } else {
        $('.header').addClass('show-header')
      }

      body_scroll = $(document).scrollTop()
    })
  }
})
