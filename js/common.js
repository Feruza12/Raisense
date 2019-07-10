
$(function () {
  $(".navbar-toggler").click(function () {
    $(".bar_icon").toggleClass("close");
  });

  $('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    navText: ["<img src='./img/Icons/prev.svg'>", "<img src='./img/Icons/next.svg'>"],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
        dotsEach: true,
      },
      600: {
        items: 1,
        dots: true,
        nav: true,
        dotsEach: true,
      },
      1000: {
        items: 1,
        dots: true,
        dotsEach: true,
        nav: true,
        loop: true
      }
    }
  })
  $('.owl-two').owlCarousel({
    loop: true,
    stagePadding: 50,
    margin: 30,
    dots: true,
    responsiveClass: true,
    // autoplay: false,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        dotsEach: true,
      },
      600: {
        items: 2,
        dots: true,
        dotsEach: true,
      },
      1000: {
        items: 4,
        dots: true,
        dotsEach: true,
        loop: true
      }
    }
  })


  $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 40) {
        $("#header").addClass("shadowing");
    }
    else {
        $("#header").removeClass("shadowing");
    }
});

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash; 
       $('html, body').animate({
      scrollTop: $(hash).offset().top - 80
    }, 'slow');
  } 
});
});
