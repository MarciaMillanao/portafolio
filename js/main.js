$(document).ready(function(){
	$(".button-collapse").sideNav({//navbar
	menuWidth: 170, 
    edge: 'left', 
	}); 
});

$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev'); 


$(document).ready(function(){  //habilidades
	$('.carousel').carousel();
});
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3);
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4);
$('.carousel').carousel('set', 4);