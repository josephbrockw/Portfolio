$(document).ready(function() {

	$('#tabone').click(function() {
		event.preventDefault();
		$(this).removeClass('infotab');
		$(this).addClass('infoTabSelect');
		console.log('success');
	});

	
});