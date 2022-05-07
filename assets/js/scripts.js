(function ($) {
  $(function () {
    $(document).ready(function () {
      liveSlickListTopFooter();
    });
    
    function liveSlickListTopFooter() {
      $(".slick-list-top-header")
        .not(".slick-initialized")
        .slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
          ],
        });
    }
  });
})(jQuery);
