// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require css3-mediaqueries
//= require css3-mediaqueries
//= require html5
//= require jquery1111.min
//= require owl.carousel
//= require script
$(document).ready(function() {
  $("#owl-slide").owlCarousel({
	autoPlay: 3000,
	items : 1,
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsTablet : [768, 1],
	itemsMobile : [479, 1],
	navigation: true,
	navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	pagination: false
  });
});
