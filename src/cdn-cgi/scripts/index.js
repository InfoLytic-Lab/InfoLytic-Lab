const $ = a => document.querySelector(a);

function globalEvL(type, selector, callback) {
  document.addEventListener(type, e => { 
    if(e.target.matches(selector)) callback(e) 
  });
}

// project-iframe

globalEvL('click', '[data-display-project]', e => {
  const projectUrl = e.target.dataset.displayProject;
  $('#project-iframe-src').setAttribute('src', projectUrl);
})


$('#project-iframe-src').addEventListener('load', e => {
  $('.project-iframe').classList.add('open');
  document.body.style.overflow = 'hidden';
})


$('.project-iframe-close').addEventListener('click', e => {

  $('.project-iframe').classList.remove('open');
  document.body.style.overflow = 'auto';
})


