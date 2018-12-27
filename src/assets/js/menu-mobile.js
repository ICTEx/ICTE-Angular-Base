/*===================================
Author       : ICTE PANAMA
Template Name: HTU
Version      : 2.0.0
===================================*/

(function ($) {
  'use strict';

  /*===================================*
          MENU MOBILE JS
  /*===================================*/

  $(function () {

// slideMenu
    function slideMenu() {
      var activeState = $("#menu_mobile").hasClass("active");
      $("#menu_mobile").animate(
        {
          left: activeState ? "0%" : "-100%"
        },
        400
      );
    }


    // change menu to close and open and overlay
    $(".menu_bar").click(function (event) {
      event.stopPropagation();
      $(".bt-menu").toggleClass("open");
      $("#menu_mobile").toggleClass("active");
      $("#overlay").toggleClass("overlay");
      slideMenu();

    });


    //Hide Navbar Dropdown After Click On Links
    $('.nav-link').click(function () {
      var $target = $('.navbar-collapse');
      if ($target.hasClass('active')) {
        $target.removeClass('active');
        $target.animate({
          left: '-100%'
        });
        $(".bt-menu").removeClass("open");
        $("#overlay").removeClass("overlay");
      }
    });

  }); // jQuery load


})(jQuery);
