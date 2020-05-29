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
      threshold: 0.2,
    },
  );

  for (const el of document.querySelectorAll('.anim-paused'))
    observer.observe(el);
}
