var $=jQuery;

// SLIDER VANTAGENS
$('.slider-vantagens').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows:false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// SLIDER PRODS
$('.slider-prods').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.btn-menu').on('click',function(e){
  e.preventDefault();
  $('.menu-mobile').addClass('show');
  $('.menu-mobile-backdrop').addClass('show');
});

$('.close-menu').on('click',function(e){
  e.preventDefault();
  $('.menu-mobile').removeClass('show');
  $('.menu-mobile-backdrop').removeClass('show');
});


