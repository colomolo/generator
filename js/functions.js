function patternInit() {
	var cellWidth = rndWidth(70, 300);
	var cellHeight = rndWidth(70, 300);
	
	$('.parameters #canvas-color').val(rndColor());
	
	var topBorder = rndWidth(0, cellHeight);
	$('.parameters #cell-height').val(cellHeight);
	$('.parameters #border-top-width').val(topBorder);
	$('.parameters #border-bottom-width').val(cellHeight-topBorder);
	
	var rightBorder = rndWidth(0, cellWidth);
	$('.parameters #cell-width').val(cellWidth);
	$('.parameters #border-right-width').val(rightBorder);
	$('.parameters #border-left-width').val(cellWidth-rightBorder);
	
	$('.parameters #border-top-color').val(rndColor());
	$('.parameters #border-right-color').val(rndColor());
	$('.parameters #border-bottom-color').val(rndColor());
	$('.parameters #border-left-color').val(rndColor());
	
	$('.parameters #cells-scale').val(rndScale());
	
	$('.parameters #cells-skewx').val(rndSkew());
	$('.parameters #cells-skewy').val(rndSkew());
	
	//var args = new Array(12);
	
	addCells(cellWidth, cellHeight);
	genPattern(collectParameters());
}

function collectParameters() {
	var args = {
				'canvas-color' : $('.parameters #canvas-color').val(),
				'border-top-color' : $('.parameters #border-top-color').val(),
				'border-right-color' : $('.parameters #border-right-color').val(),
				'border-bottom-color' : $('.parameters #border-bottom-color').val(),
				'border-left-color' : $('.parameters #border-left-color').val(),
				'cell-width' : $('.parameters #cell-width').val(),
				'cell-height' : $('.parameters #cell-height').val(),
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

function randomizePattern() {
	$('.row .unlocked').each(function() { $(this).siblings('input.inp-color').val(rndColor()); });
	$('.row .unlocked').each(function() {
		$(this).siblings('input.inp-width').val(rndWidth(0, 150));
		
	});
	$('.row .unlocked').each(function() { $(this).siblings('input.inp-scale').val(rndScale()); });
	$('.row .unlocked').each(function() { $(this).siblings('input.inp-skew').val(rndSkew()); });
}

function genPattern(args) {
	if ( (args['canvas-color'] == '') || (!args['canvas-color']) ) args['canvas-color'] = rndColor();
	
	if ( (args['border-top-color'] == '') || (!args['border-top-color']) ) args['border-top-color'] = rndColor();
	if ( (args['border-right-color'] == '') || (!args['border-right-color']) ) args['border-right-color'] = rndColor();
	if ( (args['border-bottom-color'] == '') || (!args['border-bottom-color']) ) args['border-bottom-color'] = rndColor();
	if ( (args['border-left-color'] == '') || (!args['border-left-color']) ) args['border-left-color'] = rndColor();
	
	if ( !isValidNumber(args['cell-width']) ) args['cell-width'] = rndWidth(0, 300);
	if ( !isValidNumber(args['cell-height']) ) args['cell-height'] = rndWidth(0, 300);
	
	if ( !isValidNumber(args['border-top-width']) ) args['border-top-width'] = rndWidth(0, args['cell-height']);
	if ( !isValidNumber(args['border-right-width']) ) args['border-right-width'] = rndWidth(0, args['cell-width']);
	if ( !isValidNumber(args['border-bottom-width']) ) args['border-bottom-width'] = args['cell-height']-args['border-top-width'];
	if ( !isValidNumber(args['border-left-width']) ) args['border-left-width'] = args['cell-width']-args['border-right-width'];
	
	if ( !isValidNumber(args['cellsScale']) ) args['cellsScale'] = rndScale();
	
	if ( !isValidNumber(args['skewX']) ) args['skewX'] = rndSkew();
	if ( !isValidNumber(args['skewY']) ) args['skewY'] = rndSkew();
	
	$('.cell-container').css({'background-color' : args['canvas-color']});
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

function rndWidth(min, max) {
	return Math.round(Math.random()*(max-min)+min);
}

function rndScale() {
	return (Math.random()*1+0.3).toFixed(2);
}

function rndSkew() {
	return (Math.random()*100-50).toFixed(2);
}