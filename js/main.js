$(document).ready(function(){

    // owl carousel code
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // wow js code 
    new WOW().init();


    //typed js
    var typed = new Typed('#element', {
        strings: ['Medical', 'Services'],
        typeSpeed: 50,
        bakcSpeed: 50,
        loop:true
    });


    //counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //magnific
    $('.gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
          },
        // other options
      });


      //mixitup 

      var mixer = mixitup('.porfolio');

      $("#date").datepicker();
});


  