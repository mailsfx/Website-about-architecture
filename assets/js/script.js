// =============== slider-3 ================ //
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});



// =============== switcher-4 ================ //
const img4 = document.querySelector('.section-4-right-img');
const switches4 = document.querySelectorAll('.section-4-item');

switches4.forEach((switch4,index)=>{
  switch4.addEventListener('click',(e)=>{

    for (let i = switches4.length - 1; i >= 0; i--)
      switches4[i].classList.remove('_active');

    e.currentTarget.classList.add('_active');

    img4.style.backgroundImage = `url(../arch252/assets/img/img-6-${index+1}.webp)`;
 
  });
});


