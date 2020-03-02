

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.ctrl_btn--prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    $('.ctrl_btn--next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active')
        $('body').toggleClass('lock')
    });

});