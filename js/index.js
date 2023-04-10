var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
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

// Задаем логику переключения нашим dots-ам

// const image = document.querySelectorAll('.swiper-slide')
// const sliderWay = document.querySelector('.swiper-wrapper')
// const linkPrev = document.querySelector('.swiper-button-prev');
// const linkNext = document.querySelector('.swiper-button-next');
// const dots = document.querySelector('.dots');
// const dotsItem = document.querySelectorAll('.dot')

// let count = 0;

// let width = document.querySelector('.swiper').offsetWidth;

// linkPrev.addEventListener('click', () => {
//     count--;
//     if(count < 0){
//       count = image.length - 1;
//     }
//     rollSlide()
//   })
  
//   linkNext.addEventListener('click', () => {
//     count++;
//     if(count >= image.length){
//       count = 0;
//     }
//     rollSlide()
  
//   })
  
//   function rollSlide() {
//     sliderWay.style.transform = 'translate(-' + count * width + 'px)';
//     dotsItem.forEach(item => {
//       item.classList.remove('activ');
//     })
//     if(sliderWay + 1){
//       dotsItem.forEach(item => {
//       item.classList.add('activ');
//     })
//     }
//   }