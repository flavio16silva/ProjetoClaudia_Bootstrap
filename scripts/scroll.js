// $(document).ready(function() {

// let navBtn = $('.nav-item, .footer-nav-link')

// let sliderSection = $('#mainSlider')
// let muralSection = $('#mural')
// let aboutSection = $('#sobre')
// let habilidadesSection = $('#habilidades')
// let serviceEmpSection = $('#servicos_emp')
// let estruturaSection = $('#estrutura') 
// let contatoSection = $('#rodape')

// let scrollTo = ''

// $(navBtn).click(function(){

//   let btnId = $(this).attr('id')
//   console.log(btnId)

//   if(btnId == 'mural-menu') {
//     scrollTo = muralSection
//   } else if(btnId == 'sobre-menu') {
//     scrollTo = aboutSection
//   } else if(btnId == 'habilidades-menu') {
//     scrollTo = habilidadesSection
//   } else if(btnId == 'empresariais-menu') {
//     scrollTo = serviceEmpSection
//   } else if(btnId == 'estrutura-menu') {
//     scrollTo = estruturaSection
//   } else if(btnId == 'rodape-menu') {
//     scrollTo = contatoSection
//   } else {
//     scrollTo = sliderSection
//   }

//   $([document.documentElement, document.body]).animate({
//     scrollTop: scrollTo.offset().top - 70
//   }, 1500)

// })

// })

$(document).ready(function() {

  
  let navBtn = $('.nav-item, .footer-link')

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

    if(btnId == 'mural-menu' || btnId == 'footer-mural') {
      scrollTo = muralSection
    } else if(btnId == 'sobre-menu' || btnId == 'footer-sobre') {
      scrollTo = aboutSection
    } else if(btnId == 'habilidades-menu' || btnId == 'footer-habilidades') {
      scrollTo = habilidadesSection
    } else if(btnId == 'empresariais-menu' || btnId == 'footer-servicos') {
      scrollTo = serviceEmpSection
    } else if(btnId == 'estrutura-menu' || btnId == 'footer-estrutura') {
      scrollTo = estruturaSection
    } else if(btnId == 'rodape-menu' || btnId == 'footer-contato') {
      scrollTo = contatoSection
    } else {
      scrollTo = sliderSection
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: scrollTo.offset().top - 70
    }, 1500)
  })

})