var main = function() {
  $('.more-btn').on('click', event => {
    $('.more-menu').toggle();
  });
  $('.share').on('click', event => {
    $('.share-menu').toggle();
  })
  
  $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })
};

$(document).ready(main);
