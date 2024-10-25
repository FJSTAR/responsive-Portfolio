// typing animation
var typed = new Typed(".typing", {
    strings: ["","UI Developer", "Web Developer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
document.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Portfolio filter tabs
(function($) {

    'use strict';
  
    var $filters = $('.filter [data-filter]'),
      $boxes = $('.boxes [data-portfolio]');
  
    $filters.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      
      $filters.removeClass('active');
      $this.addClass('active');
  
      var $filterColor = $this.attr('data-filter');
  
      if ($filterColor == 'all') {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.addClass('is-animated').fadeIn();
          });
      } else {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.filter('[data-portfolio = "' + $filterColor + '"]')
              .addClass('is-animated').fadeIn();
          });
      }
    });
  
  })(jQuery);