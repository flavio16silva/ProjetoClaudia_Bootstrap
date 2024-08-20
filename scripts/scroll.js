$(document).ready(function() {

// Scroll para seções do Navbar
let navBtn = $('.nav-item')

let sliderSection = $('#mainSlider')
let muralSection = $('#mural')
let aboutSection = $('#sobre')
let habilidadesSection = $('#habilidades')
let serviceEmpSection = $('#servicos_emp')
let estruturaSection = $('#estrutura') 
let contatoSection = $('#rodape')

let scrollTo = ''

$(navBtn).click(function(){

  let btnId = $(this).attr('id')
  console.log(btnId)

  if(btnId == 'mural-menu') {
    scrollTo = muralSection
  } else if(btnId == 'sobre-menu') {
    scrollTo = aboutSection
  } else if(btnId == 'habilidades-menu') {
    scrollTo = habilidadesSection
  } else if(btnId == 'empresariais-menu') {
    scrollTo = serviceEmpSection
  } else if(btnId == 'estrutura-menu') {
    scrollTo = estruturaSection
  } else if(btnId == 'rodape-menu') {
    scrollTo = contatoSection
  } else {
    scrollTo = sliderSection
  }

  $([document.documentElement, document.body]).animate({
    scrollTop: scrollTo.offset().top - 70
  }, 1500)

})

})