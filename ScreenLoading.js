window.addEventListener('load', function() {
  const loader = document.querySelector('.loading-screen');
  const splash = document.querySelector('.splash');
  const bigby = document.querySelector('.bigby');
  
  loader.classList.add('loader-hidden');
  splash.classList.add('splash-animate');
  bigby.classList.add('bigby-animate');

  loader.addEventListener('transitionend', function() {
    loader.remove();
  });
});
