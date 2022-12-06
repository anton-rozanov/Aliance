const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) =>{
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logoLight.style.display = "none";
};
const lightModeOff = (event) =>{
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logoLight.style.display = "block";
};

const openMenu = (event) => { // функция открывания меню
  menu.classList.add('is-open'); // вешает класс is-open
  mMenuToggle.classList.add('close-menu');
  document.body.style.overflow="hidden"; // запрещаем прокрутку сайта под меню
  lightModeOn();
};
const closeMenu = (event) => { // функция закрвания меню
  menu.classList.remove('is-open'); // убирает класс is-open
  mMenuToggle.classList.remove('close-menu');
  document.body.style.overflow=""; // разрешает прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener('scroll', () => {
  //ДО
  /* if(this.scrollY > 1){
    lightModeOn();
  } else{
    lightModeOff();
  } */
  //ПОСЛЕ
  this.scrollY > 1 ? lightModeOn() : lightModeOff(); // 1.условие  2. ? - if , 3. : - else
});
mMenuToggle.addEventListener('click',(event) =>{
  event.preventDefault();
  // ДО
  /*if (menu.classList.contains('is-open')) { // если меню открыто ... 
    closeMenu(); // закрыть меню
  } else { // иначе ...
    openMenu(); // открыть меню
  }*/
  // ПОСЛЕ
  menu.classList.contains('is-open') ? closeMenu() : openMenu(); // 1.условие  2. ? - if , 3. : - else
});
const swiperSteps = new Swiper('.steps-slider',{
  speed: 400,
  slidesPerView: 1,
  navigation: { 
    nextEl: '.steps-button-next',     // кнопка вперед  
    prevEl: '.steps-button-prev',     // внопка назад
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
  },

});
const swiper = new Swiper('.features-slider', { // библиотека 
  speed: 400,
  slidesPerView: 1,  // сколько слайдов должно быть
  //loop: true, // чтобы прокручивались слайды бесконечно
  navigation: { 
    nextEl: '.slider-button-next',     // кнопка вперед  
    prevEl: '.slider-button-prev',     // внопка назад
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    },
  },
});
const swiperBlog = new Swiper('.blog-slider', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: { 
    nextEl: '.blog-button-next',     // кнопка вперед  
    prevEl: '.blog-button-prev',     // внопка назад
  },

});