;
(function ($) {

  $(document).ready(function () {

    $(".values__content--item").hover(function () {
      const value = $(this).html();
      $(".values__content--center").html(value);
    });

  });
}(jQuery));