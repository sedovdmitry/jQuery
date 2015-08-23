$(document).ready(function(){
	$('#one').after("I'll go where I want to go!");
	var $paragraph = $('p').remove();
	$('#two').after($paragraph);
});