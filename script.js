$(document).ready(function () {
	$('.scene1').hide()
	$('.scene2').hide()
	$('.scene3').hide()
	$(".start").click(function () {
		$('.baggrund').hide()
		$('.scene1').show()
		$('.scene2').hide()
		$('.scene3').hide()

	});
	$(".telefon").click(function () {
		$('.baggrund').hide()
		$('.scene1').hide()
		$('.scene2').show()
		$('.scene3').hide()

	});
	$(".telefonhand").click(function () {
		$('.baggrund').hide()
		$('.scene1').hide()
		$('.scene2').hide()
		$('.scene3').show()

	});
});
