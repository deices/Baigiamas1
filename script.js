

function changeTab(target, name){
  var tabs = document.getElementsByClassName('tab')
  var tab = document.getElementById(name);
  var buttons = document.getElementsByTagName('button')
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("tabStyle1");


    tab.style.display = "flex";

    setTimeout(function(){
      tab.classList.add("tabStyle1");
    }, 1000);


      buttons[i].classList.remove("active");
  }
  target.currentTarget.className = "active";
}


const swiper = new Swiper('.swiper', {

  breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1,

     },
     700: {
       slidesPerView: 2,

     },
     900: {
       slidesPerView: 3,
     },

     1200: {
       slidesPerView: 4,
       loop: false,
     },
   },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
