// funcionalidad de desplazar hacia arriba
const swipeUp = document.querySelector('#swipe-up');
const burger = document.querySelector('#menu-burger');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
let displaySwipeUp = false;

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  })
);
swipeUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 200 && !displaySwipeUp) {
    displaySwipeUp = true;
    swipeUp.classList.toggle('hidden');
    swipeUp.classList.replace('animate__fadeOut', 'animate__fadeIn');
    return;
  }
  if (window.scrollY < 200 && displaySwipeUp) {
    displaySwipeUp = false;
    swipeUp.classList.replace('animate__fadeIn', 'animate__fadeOut');
    setTimeout(() => swipeUp.classList.toggle('hidden'), 1000);
    return;
  }
});
burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});
