let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

$(document).ready(function () {
  $('.anchor').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 700)
  })

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $('.modall-body')
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active-modall')
        $('.modall').removeClass('active-modall')
        $('.body').removeClass('showing-modal')
      }
    })
  })
  $('.close, .btn-close').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').removeClass('showing-modal')
    $('.modall-body ').removeClass('active')
  })

  $('.btn-close').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').removeClass('showing-modal')
    $('.modall-body ').removeClass('active')
  })

  $('.order-btn').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').addClass('showing-modal')
    $('.modall-order').addClass('active-modall')
    setTimeout(function () {
      $('.modall-body ').addClass('active')
    }, 200)
  })

  $('.thx-you').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').addClass('showing-modal')
    $('.modall-thx').addClass('active-modall')
    setTimeout(function () {
      $('.modall-body ').addClass('active')
    }, 200)
  })
})
