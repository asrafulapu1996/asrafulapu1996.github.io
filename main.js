document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-pane a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // FLAP project video autoplay
  const flapVideo = document.querySelector('.project video');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        flapVideo.play();
      } else {
        flapVideo.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(flapVideo);
});
