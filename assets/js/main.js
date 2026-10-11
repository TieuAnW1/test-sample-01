const scrollTopBtn = document.querySelector('.scroll-top');
const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(([entry]) => {
  scrollTopBtn.hidden = false;
  scrollTopBtn.classList.toggle('is-visible', !entry.isIntersecting);
});

observer.observe(hero);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
