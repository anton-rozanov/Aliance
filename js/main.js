const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) =>{
  navbar.classList.add("navbar-light");
  logo.href.baseVal =   "img/sprite.svg#logo";
};
const lightModeOff = (event) =>{
  navbar.classList.remove("navbar-light");
  logo.href.baseVal =   "img/sprite.svg#logo-light";
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