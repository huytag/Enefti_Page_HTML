(function ($) {
  $(function () {
    $(document).ready(function () {
      liveSlickListTopFooter();
      liveSlickListCollections();
      clickSlickBtnPrevCollection();
      clickSlickBtnNextCollection();
    });

    function liveSlickListCollections() {
      $(".slick-collections")
        .not(".slick-initialized")
        .slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
          ],
        });
    }

    function clickSlickBtnPrevCollection() {
      const el = $(".collection-btn-prev");
      if (el.length > 0) {
        el.on("click", function (e) {
          $(".slick-collections").filter(".slick-initialized").slick("slickPrev");
        });
      }
    }

    function clickSlickBtnNextCollection() {
      const el = $(".collection-btn-next");
      if (el.length > 0) {
        el.on("click", function (e) {
          $(".slick-collections").filter(".slick-initialized").slick("slickNext");
        });
      }
    }

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
