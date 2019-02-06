$(function(){
  $('.nav-link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 93.5)
    }, 700);
    return false;
  });
});
