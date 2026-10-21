window.addEventListener('load', function() {

  const loader = document.querySelector('.loading-screen');
  const splash = document.querySelector('.splash');
  const bigby = docement.querySelector('.bigby');
  
  loader.classList.add('loader-hidden');
  splash.classList.add('splash-hidden');
  bigby.classList.add('bigby-hidden');

  loader.addEventListener('transitionend', function() {
    loader.remove();
  });
  
  splash.addEventListener('transitionend', function() {
    loader.remove();
  });
  
  bigby.addEventListener('transitionend', function() {
    loader.remove();
  });
  
});
