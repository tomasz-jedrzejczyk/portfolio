$(function () {
    $(document).scroll(function () {
      var $nav = $(".navigator");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });