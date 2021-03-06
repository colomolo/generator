$(document).ready(function(){
	patternInit();
	
	$('.parameters input').change(function() {
		genPattern(collectParameters());
	});
	
	$('.parameters .randomize').click(function(e) {
		$(this).toggleClass('locked unlocked');
		e.preventDefault();
	});
	
	$('.parameters .random').click(function(e) {
		randomizePattern();
		genPattern(collectParameters());
		e.preventDefault();
	});
});