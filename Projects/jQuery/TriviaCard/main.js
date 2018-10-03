$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  })
  
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut();
    $('frown').show();
  })
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut();
    $('frown').show();
  })
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut();
    $('frown').show();
  })
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').hide();
    $('.wrong-answer-two').hide();
    $('.wrong-answer-three').hide();
  })
  
  $('.smiley').on('click', () => {
    $('.wrong-answer-one').show();
    $('.wrong-answer-two').show();
    $('.wrong-answer-three').show();
    $('.smiley').hide();
  })
});
