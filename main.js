$(function() {
  $('#accordion dd').hide();
  $('#accordion dt').on('click', function(){
    $(this).next('dd').slideToggle();
});
  $('#accordion1 dd').hide();
  $('#accordion1 dt').on('click', function(){
    $(this).next('dd').slideToggle();
  });
});
