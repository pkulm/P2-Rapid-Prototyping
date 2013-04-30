// JavaScript Document

$(document).ready(function(){
	$('.carousel').carousel({
  interval: 4000,
  pause: 'hover',
})
	
});

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
