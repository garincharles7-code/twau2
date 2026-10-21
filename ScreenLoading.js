window.addEventListener('load', function() {
  const loader = document.querySelector('.loading-screen');
  const splash = document.querySelector('.splash');
  loader.classList.add('loader-hidden');
  splash.classList.add('splash-hidden');

  loader.addEventListener('transitionend', function() {
    loader.remove();
  });
  
  splash.addEventListener('transitionend', function() {
    loader.remove();
  });
});
