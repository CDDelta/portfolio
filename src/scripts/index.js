import 'bootstrap/js/dist/collapse';

document.addEventListener('DOMContentLoaded', () => {
  watchAnimationsInViewport();
});

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
