$(document).ready(function(){

     $('.main_btn, .main_btna, .main_nav > nav > ul > li:eq(1)').on('click', () => {
          $('.overlay').fadeIn('slow');
          $('.modal').slideDown('slow');
     });

     $('.modal > .close').on('click', () => {
          $('.overlay').fadeOut('slow');
          $('.modal').slideUp('slow');
     });
});