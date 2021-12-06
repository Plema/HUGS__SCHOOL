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

  // $('.menu-list__item .menu-link').on('click', function () {
  //   $('.menu-link').removeClass('active')
  //   $(this).addClass('active')
  //   $('.header-burger,.header-menu').toggleClass('active')
  // })
  // $('.menu-list__item .menu-link').hover(function () {
  //   $('.menu-link').removeClass('active')
  //   $(this).toggleClass('active')
  // })

  $('.menu-list .menu-list__item').on('click', function () {
    $('.menu-list__item').removeClass('current_page_item')
    $(this).addClass('current_page_item')
    $('.header-burger,.header-menu').toggleClass('active')
  })
  $('.menu-list .menu-list__item').hover(function () {
    $('.menu-list__item').removeClass('current_page_item')
    $(this).toggleClass('current_page_item')
  })

  $('.nav-list .nav-list__item').on('click', function () {
    $('.nav-list__item').removeClass('current_page_item')
    $(this).addClass('current_page_item')
  })
  $('.nav-list .nav-list__item').hover(function () {
    $('.nav-list__item').removeClass('current_page_item')
    $(this).toggleClass('current_page_item')
  })
})
