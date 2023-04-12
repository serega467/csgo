var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),

  // Зацикливаем бесконечную прокрутку нашего слайдера
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,

  },


  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}





// const links = document.querySelectorAll(".nav-menu__item");

// links.forEach(link => link.addEventListener("click", e =>{ 
//   e.target.style.color = "red"; }
//   ));
 
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("menu-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-link--active");
    current[0].className = current[0].className.replace(" menu-link--active", "");
    this.className += " menu-link--active";
  });
}