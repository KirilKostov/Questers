$(document).ready(function() {
  showMenu();

  function showMenu(){
    $('.menu-trigger').on('click', function(){
      $('#main-menu').slideToggle();
    });
  }
});