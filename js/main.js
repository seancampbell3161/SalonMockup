$(document).ready(function() {
  let scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 100) {
      $("nav").css('background-color', 'white');
      $("nav a").css('color', 'black');
      $("nav p").css('color', 'black');
    } else {
      $("nav").css('background', 'none');
      $("nav a").css('color', 'white');
      $("nav p").css('color', 'white');
    }
  })
});
