$(document).ready(function ()
   {

     var images = ['images/Warstwa2.png', 'images/Shape170copy.png', 'images/Warstwa1.png']
     var headings = ['Welcome to Cino', 'Welcome to Dino', 'Welcome to Bino']
     var index = -1;

      $('.arrow-right').click(function () {
            index = (index + 1 < images.length) ? index + 1 : 0;
            $('.slider').css("background-image", "url('" + images[index] + "')")
            $('h2').text(headings[index]);
            $('.arrow-right').css("background-color", "#d63f04");
          });

          $('.arrow-left').click(function () {
                index = (index + 1 < images.length) ? index + 1 : 0;
                $('.slider').css("background-image", "url('" + images[index] + "')")
                $('h2').text(headings[index]);
                $('.arrow-left').css("background-color", "#d63f04");
              });


        $('#colorbtn').click(function () {
            $('#colorbtn').css("background-color", "#d63f04")
            $('#colorbtn').css("border", "none")
        });

        $('#transbtn').click(function () {
            $('#transbtn').css("background-color", "#d63f04")
            $('#transbtn').css("border", "none")

          });


          $(function() {
  var menuVisible = false;
  $('#menuicon').click(function() {
    if (menuVisible) {
      $('#menu').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#menu').css({'display':'flex'});
    $('#menu').css({'flex-direction':'column'});
    menuVisible = true;
  });
  $('#menu').click(function() {
    $('this').css({'display':'none'});
    menuVisible = false;
  });
});

   });
