
(() => {
  // Menu mobile
  let openMenu = document.querySelector('.js-open-mobile');
  let closeMenu = document.querySelector('.js-close-mobile');
  let headerMobile = document.querySelector('.header-mobile');

  toggleMenu(openMenu,headerMobile);
  toggleMenu(closeMenu,headerMobile);
  function toggleMenu(element, menu){
    element.addEventListener('click', function(){
        if(this.classList.contains('js-open-mobile')){
            menu.classList.add('active');
            document.body.style.overflowY = "hidden";
        }else{
            menu.classList.remove('active');
            document.body.style.overflowY = "auto";
        }
    });
  }

  document.querySelectorAll('.header-mobile__menu li a').forEach(e => {
    e.addEventListener('click', function(){
        headerMobile.classList.remove('active');
        document.body.style.overflowY = "auto";
    });
  });

  //Video
  myVideo  = document.getElementById('video01');
  playBtn  = document.querySelector('#movie .play-btn');
  pauseBtn = document.querySelector('#movie .pause-btn');
  
  eventVideo(playBtn,myVideo);
  eventVideo(pauseBtn,myVideo);

  function eventVideo(element,video){
    element.addEventListener('click', function(){
      if(this.classList.contains('play-btn')){
        video.play();
        this.closest('#movie').classList.add('active');
      }else{
        video.pause();
        this.closest('#movie').classList.remove('active');
      }
    });
  };

  //Scroll
    function backToTop() {
        let target = document.getElementById("toTop");
        if(!!target){
        target.querySelectorAll('.js-scroll').forEach(e => {
            e.addEventListener("click", function () {
            scrollTo(0);
            });
        })
        if (window.pageYOffset > window.innerHeight/4) {
            target.classList.add("show");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > window.innerHeight/4) {
            target.classList.add("show");
            } else {
            target.classList.contains("show") && target.classList.remove("show");
            }
        });
        }
    };


    function scrollTo(position){
        let pageYoffset = window.pageYOffset;
        let boolean = position - pageYoffset > 0 ? true : false;
        let distance = Math.abs((pageYoffset - position) / 10);
        requestAnimationFrame(step);
    
        function step() {
        if (boolean) {
            if (pageYoffset < position) {
            window.scrollTo(0, (pageYoffset += distance) > position ? position : pageYoffset);
            requestAnimationFrame(step);
            }
        } else {
            if (pageYoffset > position) {
            window.scrollTo(
                0,
                pageYoffset >= distance ? (pageYoffset -= distance) : ((pageYoffset = position - 1), position),
            );
            requestAnimationFrame(step);
            }
        }
        }
    };

    backToTop();

$('.js-slide').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: $('.js-dots'),
    prevArrow: $('.js-paginator .prev'),
    nextArrow: $('.js-paginator .next')
});
$('.js-slide-mobile').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    appendDots: $('.js-mobile-dots')
});

$('.slider-list-img').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
});

$('.slider-list-img-02').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
   
});




$(".scroll-mobile").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr('href'));
});
// This is a functions that scrolls to #{blah}link
function goToByScroll(href) {
    // Remove "link" from the ID
    id = href.replace("#", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - $('.mobile-menu').height()
    }, 100);
}

//Lazy load
let lazyloadImages = document.querySelectorAll("img.lazy");    
let lazyloadThrottleTimeout;

function lazyload () {
  if(lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }    
  
  lazyloadThrottleTimeout = setTimeout(function() {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
          if(img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
      });
      if(lazyloadImages.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
  }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);

console.log('index loaded');
})();