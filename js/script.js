$(function () {
    'use strict';

  /* =====================================================
    Main Slider js start
  ======================================================*/
    $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            fade: true,
            cssEase: 'linear',
            nextArrow: '<i class="fas fa-angle-double-right nxt_arr"></i>',
            prevArrow: '<i class="fas fa-angle-double-left prv_arr"></i>',

          });

  /* =====================================================
    Main Slider js end
  ======================================================*/

});