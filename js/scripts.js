$(document).ready(function(){
	patternInit();
	
	// $('.parameters .inp-cell').change(function() {		
		// addCells();
		// changeBorderColor();
		// changeBorderWidth();
	// });
	$('.parameters input').change(function() {
		genPattern(collectParameters());
	});
	/*
	$('.parameters .inp-transform').change(function() {
		changeCellsScale();
		changeCellsSkew();
	});
	*/
	$('.parameters .rnd-color').click(function(e) {		
		$(this).siblings('input.inp-border').val(rndColor());
		genPattern(collectParameters());
		e.preventDefault();
	});
	$('.parameters .rnd-width').click(function(e) {		
		$(this).siblings('input.inp-border').val(rndBorderWidth(150));
		genPattern(collectParameters());
		e.preventDefault();
	});
	$('.parameters .rnd-scale').click(function(e) {		
		$(this).siblings('input.inp-transform').val(rndScale());
		genPattern(collectParameters());
		e.preventDefault();
	});
	$('.parameters .rnd-skew').click(function(e) {		
		$(this).siblings('input.inp-transform').val(rndSkew());
		genPattern(collectParameters());
		e.preventDefault();
	});
});


/*

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/

function patternInit() {
	var cellWidth = Math.ceil(Math.random()*100+50);
	var cellHeight = Math.ceil(Math.random()*100+50);
	
	var topBorder = rndBorderWidth(cellHeight);
	$('.parameters #border-top-width').val(topBorder);
	$('.parameters #border-bottom-width').val(cellHeight-topBorder);
	
	var rightBorder = rndBorderWidth(cellWidth);
	$('.parameters #border-right-width').val(rightBorder);
	$('.parameters #border-left-width').val(cellWidth-rightBorder);
	
	$('.parameters #border-top-color').val(rndColor());
	$('.parameters #border-right-color').val(rndColor());
	$('.parameters #border-bottom-color').val(rndColor());
	$('.parameters #border-left-color').val(rndColor());
	
	$('.parameters #cells-scale').val(rndScale());
	
	$('.parameters #cells-skewx').val(rndSkew());
	$('.parameters #cells-skewy').val(rndSkew());
	
	addCells(cellWidth, cellHeight);
	genPattern(collectParameters());
}

function collectParameters() {
	var args = {
				'border-top-color' : $('.parameters #border-top-color').val(),
				'border-right-color' : $('.parameters #border-right-color').val(),
				'border-bottom-color' : $('.parameters #border-bottom-color').val(),
				'border-left-color' : $('.parameters #border-left-color').val(),
				'border-top-width' : $('.parameters #border-top-width').val(),
				'border-right-width' : $('.parameters #border-right-width').val(),
				'border-bottom-width' : $('.parameters #border-bottom-width').val(),
				'border-left-width' : $('.parameters #border-left-width').val(),
				'cellsScale' : $('.parameters #cells-scale').val(),
				'skewX' : $('.parameters #cells-skewx').val(),
				'skewY' : $('.parameters #cells-skewy').val()
	}
	
	return args;
}

function addCells(cellWidth, cellHeight) {
	var vprtWidth = $(window).width();
	var vprtHeight = $(window).height();
	
	$('.cell-container').empty();
	
	var colsCount = Math.ceil(vprtWidth/cellWidth);
	var rowsCount = Math.ceil(vprtHeight/cellHeight);
	
	for ( var i=0; i<rowsCount; i++ ) {
		$('.cell-container').append('<li></li>');
		for ( var j=0; j<colsCount; j++ ) {
			$('.cell-container > li').eq(i).append('<div class="cell"></div>');
		}
	}
}
/*
function changeBorderColor() {
	var borderTopColor = $('.parameters #border-top-color').val();
	var borderRightColor = $('.parameters #border-right-color').val();
	var borderBottomColor = $('.parameters #border-bottom-color').val();
	var borderLeftColor = $('.parameters #border-left-color').val();
	
	if ( borderTopColor != '' ) {$('.cell').css({'border-top-color':borderTopColor});}
	if ( borderRightColor != '' ) {$('.cell').css({'border-right-color':borderRightColor});}
	if ( borderBottomColor != '' ) {$('.cell').css({'border-bottom-color':borderBottomColor});}
	if ( borderLeftColor != '' ) {$('.cell').css({'border-left-color':borderLeftColor});}
}

function changeBorderWidth() {
	var borderTopWidth = $('.parameters #border-top-width').val();
	var borderRightWidth = $('.parameters #border-right-width').val();
	var borderBottomWidth = $('.parameters #border-bottom-width').val();
	var borderLeftWidth = $('.parameters #border-left-width').val();

	if ( borderTopWidth != '' ) {$('.cell').css({'border-top-width':borderTopWidth+'px'});}
	if ( borderRightWidth != '' ) {$('.cell').css({'border-right-width':borderRightWidth+'px'});}
	if ( borderBottomWidth != '' ) {$('.cell').css({'border-bottom-width':borderBottomWidth+'px'});}
	if ( borderLeftWidth != '' ) {$('.cell').css({'border-left-width':borderLeftWidth+'px'});}
}

function changeCellsScale() {
	var cellsScale = $('.parameters #cells-scale').val();
	
	if ( cellsScale != '' ) {$('.cell').css({'transform':'scale('+cellsScale+')'});}
}

function changeCellsSkew() {
	var cellsSkewX = $('.parameters #cells-skewx').val();
	var cellsSkewY = $('.parameters #cells-skewy').val();
	
	if ( cellsSkewX != '' ) {$('.cell').css({'transform':'skewX('+cellsSkewX+'deg)'});}
	if ( cellsSkewY != '' ) {$('.cell').css({'transform':'skewY('+cellsSkewY+'deg)'});}
}
*/
function genPattern(args) {
	if ( args['border-top-color'] == '' ) args['border-top-color'] = rndColor();
	if ( args['border-right-color'] == '' ) args['border-right-color'] = rndColor();
	if ( args['border-bottom-color'] == '' ) args['border-bottom-color'] = rndColor();
	if ( args['border-left-color'] == '' ) args['border-left-color'] = rndColor();
	
	if ( !isValidNumber(args['border-top-width']) ) args['border-top-width'] = rndBorderWidth(150);
	if ( !isValidNumber(args['border-right-width']) ) args['border-right-width'] = rndBorderWidth(150);
	if ( !isValidNumber(args['border-bottom-width']) ) args['border-bottom-width'] = rndBorderWidth(150);
	if ( !isValidNumber(args['border-left-width']) ) args['border-left-width'] = rndBorderWidth(150);
	
	if ( !isValidNumber(args['cellsScale']) ) args['cellsScale'] = rndScale();
	
	if ( !isValidNumber(args['skewX']) ) args['skewX'] = rndSkew();
	if ( !isValidNumber(args['skewY']) ) args['skewY'] = rndSkew();
	
	$('.cell').css({
		'border-color' : args['border-top-color']+' '+args['border-right-color']+' '+args['border-bottom-color']+' '+args['border-left-color'],
		'border-width' : args['border-top-width']+'px '+args['border-right-width']+'px '+args['border-bottom-width']+'px '+args['border-left-width']+'px',
		'border-style' : 'solid',
		'transform' : 'scale('+args['cellsScale']+') skewX('+args['skewX']+'deg) skewY('+args['skewY']+'deg)'
		});
}

function isValidNumber(n) {
	return !isNaN(parseFloat(n));
}

/* randomize functions */
function rndColor() {
	return '#'+('00000'+Math.floor(Math.random()*0x1000000).toString(16)).substr(-6);
}

function rndBorderWidth(e) {
	return Math.round(Math.random()*e);
}

function rndScale() {
	return (Math.random()*1+0.3).toFixed(2);
}

function rndSkew() {
	return (Math.random()*100-50).toFixed(2);
}