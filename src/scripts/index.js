import 'bootstrap/js/src/collapse';

document.addEventListener('DOMContentLoaded', () => {
  hideHeaderWhenScrollingDown();
  watchAnimationsInViewport();
});

function hideHeaderWhenScrollingDown() {
  const header = document.querySelector('header');

  let prevScrollPos = window.pageYOffset;
  document.addEventListener('scroll', (_) => {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos)
      header.classList.remove('header-hide');
    else header.classList.add('header-hide');

    prevScrollPos = currentScrollPos;
  });
}

function watchAnimationsInViewport() {
  let observer = new IntersectionObserver(
    (entries, _) => {
      for (const entry of entries) {
        if (
          entry.isIntersecting &&
          entry.target.classList.contains('anim-paused')
        ) {
          entry.target.classList.remove('anim-paused');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.3,
    },
  );

  observer.observe(document.querySelector('.jumbotron'));
  observer.observe(document.querySelector('#projects'));
  observer.observe(document.querySelector('#blog'));
}
