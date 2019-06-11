
$(function () {
  $(".navbar-toggler").click(function () {
    $(".bar_icon").toggleClass("close");
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    navText: ["<img src='./img/Icons/prev.png'>", "<img src='./img/Icons/next.png'>"],
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



  // if ($(window).scrollTop() > 0) {
  //   $("#header").addClass("shadow");
  // }
  // else {
  //   $("#header").removeClass("shadow");
  // }

  $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 40) {
        $("#header").addClass("shadow");
    }
    else {
        $("#header").removeClass("shadow");
    }
});

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash; 
       $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
    });
  } 
});
});
