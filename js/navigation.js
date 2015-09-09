function init() {
	$(window).resize(onResize);

  $('.menu-trigger').on('click', function(){
    $('#main-menu').slideToggle();
  });
}

function onResize() {
	if ( $(window).width() > 768 && !$('.menu-trigger').is(':visible') ) {
		$('#main-menu').show();
	}
}

$(document).ready(function() {
	init();
});