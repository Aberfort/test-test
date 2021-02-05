"use strict";

;
(function ($) {

  $(document).ready(function () {

    $(".values__content--item").hover(function () {
      var value = $(this).html();
      $(".values__content--center").html(value);
    });
  });
})(jQuery);