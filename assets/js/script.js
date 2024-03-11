

$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    })
});


var typed = new Typed (".text",{
    strings:["Skin and venereal disease"," other diseses seecialist","Koloni Bazar , Pirgonj , Rangpur" ,"Phone : 01738377374"],
    typeSpeed:100,
    backDelay:1000,
    backSpeed:100,
    loop:true
})






const swiper = new Swiper('.swiper', {
    // Optional parameters
   autoplay:{
delay:3000,
disableOnInteraction:false
   },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  
  });

  var usd = document.querySelector("#usd");
  counterInformation = 0;
  setInterval(() => {
    counterInformation++;
    usd.innerHTML = "$ "+ counterInformation;
  }, 100);