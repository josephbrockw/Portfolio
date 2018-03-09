$(document).ready(function() {

	$('.tabs').click(function() {
		event.preventDefault();
		$('.tabs').removeClass('infoTabSelect');
		$('.tabs').addClass('infotab2');
		$(this).removeClass('infotab2');
		$(this).addClass('infoTabSelect');
		console.log('success');
	});
});
