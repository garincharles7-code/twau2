window.addEventListener('load', function() {
  const loader = document.querySelector('.loading-screen');
  
  const splash = document.querySelector('.splash');
  const bigby = document.querySelector('.bigby');
  const splashChar = document.querySelector('.splashChar');
  const introBottom = document.querySelector('.intro-bottom');
  const container = document.querySelector('.Container');
  
  loader.classList.add('loader-hidden');
  if (splash) splash.classList.add('splash-animate');
  if (bigby) bigby.classList.add('bigby-animate');
  if (splashChar) splashChar.classList.add('splashChar-animate');
  if (introBottom) introBottom.classList.add('introBottom-animate');
  if (container) container.classList.add('Container-animate');
  document.documentElement.classList.add("loading-active");

  loader.addEventListener('transitionend', function() {
    loader.remove();
    document.documentElement.classList.remove("loading-active");
  });
});
