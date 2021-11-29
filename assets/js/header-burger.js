$(function () {
  $('.header__mob .header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })
  $('.close-menu').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })
  $('.main').click(function (event) {
    $('.header-burger,.header-menu').removeClass('active')
  })

  $('.menu-list__item .menu-link').on('click', function () {
    $('.menu-link').removeClass('active')
    $(this).addClass('active')
    $('.header-burger,.header-menu').toggleClass('active')
  })
  $('.menu-list__item .menu-link').hover(function () {
    $('.menu-link').removeClass('active')
    $(this).toggleClass('active')
  })

  $('.nav-list__item .nav-list__link').on('click', function () {
    $('.nav-list__link').removeClass('active')
    $(this).addClass('active')
  })
  $('.nav-list__item .nav-list__link').hover(function () {
    $('.nav-list__link').removeClass('active')
    $(this).toggleClass('active')
  })
})
