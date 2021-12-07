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

  $('.select-year').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450 // длительность анимации

    _this.hide()
    _this.wrap('<div class="select-inner-year"></div>')
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text(),
    }).insertAfter(_this)

    const selectHead = _this.next('.new-select')
    $('<div>', {
      class: 'new-select__list',
    }).insertAfter(selectHead)

    const selectList = selectHead.next('.new-select__list')
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList)
    }

    const selectItem = selectList.find('.new-select__item')
    selectList.slideUp(0)
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on')
        selectList.slideDown(duration)

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value')

          $('select').val(chooseItem).attr('selected', 'selected')
          selectHead.text($(this).find('span').text())

          selectList.slideUp(duration)
          selectHead.removeClass('on')
        })
      } else {
        $(this).removeClass('on')
        selectList.slideUp(duration)
      }
    })
  })
  $('.select-moon').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450 // длительность анимации

    _this.hide()
    _this.wrap('<div class="select-inner-moon"></div>')
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text(),
    }).insertAfter(_this)

    const selectHead = _this.next('.new-select')
    $('<div>', {
      class: 'new-select__list',
    }).insertAfter(selectHead)

    const selectList = selectHead.next('.new-select__list')
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList)
    }

    const selectItem = selectList.find('.new-select__item')
    selectList.slideUp(0)
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on')
        selectList.slideDown(duration)

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value')

          $('select').val(chooseItem).attr('selected', 'selected')
          selectHead.text($(this).find('span').text())

          selectList.slideUp(duration)
          selectHead.removeClass('on')
        })
      } else {
        $(this).removeClass('on')
        selectList.slideUp(duration)
      }
    })
  })
})
