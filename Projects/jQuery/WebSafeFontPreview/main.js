$(document).ready(() => {
  $('#text').keyup(event => {
    let value = $(event.currentTarget).val();
    $('.preview').html(value);
    
    $('#font').change(event => {
      let newCss = $(event.currentTarget).val();
      $('.preview').css({
        fontFamily : newCss
      });
    })
    
    $('#weight').change(event => {
      let newWeight = $(event.currentTarget).val();
      $('.preview').css({
        fontWeight: newWeight
      });
    })
    
    $('#size').keyup(event => {
      let newSize = $(event.currentTarget).val() + 'px';
      if($(event.currentTarget).val() === ''){
        newSize = 12 + 'px';
      }
      $('.preview').css({
        fontSize : newSize
      });
    })
    
  })
})
