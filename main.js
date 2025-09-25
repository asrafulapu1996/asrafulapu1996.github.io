// Smooth scroll when clicking nav links
document.querySelectorAll('.nav-pane a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Select the FLAP project video
const flapVideo = document.querySelector('.project video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      flapVideo.play();    // start playing
    } else {
      flapVideo.pause();   // pause when scrolled out
    }
  });
}, { threshold: 0.5 });  // play when 50% visible

observer.observe(flapVideo);
