const menuToggle = document.querySelector('.header-mobile-icon');
const offcanvasMenu = document.getElementById('offcanvas-menu');
const offcanvasClose = document.getElementById('offcanvas-close');

menuToggle.addEventListener('click', () => {
  offcanvasMenu.classList.add('active');
});

offcanvasClose.addEventListener('click', () => {
  offcanvasMenu.classList.remove('active');
});


window.addEventListener('click', (e) => {
  if (!offcanvasMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    offcanvasMenu.classList.remove('active');
  }
});
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle('active');
  });
});
