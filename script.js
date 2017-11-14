$(document).ready(function () {
	$('.scene1').hide()
	$('.scene2').hide()
	$('.scene3').hide()


	var audio = $("#mysoundclip")[0];

	$("button").click(function () {
		audio.play();
		$('.forside').hide()
		$('.baggrund').hide()
		$('.scene1').show()
		$('.henrik').addClass('sidder_ned')
		$('.henrik').addClass('telefon')
		$('.scene2').hide()
		$('.scene3').hide()



		$('.scene2').show(10000)
		$('.brian').addClass("tale")


	});



	$(".telefon").click(function () {
		$('.baggrund').hide()
		$('.scene1').hide()
		$('.scene2').show()
		$('.scene3').hide()

	});
	$(".tlfslet").click(function () {
		$('.baggrund').hide()
		$('.scene1').hide()
		$('.scene2').hide()
		$('.scene3').show()

	});
	$(".tlfsend").click(function () {
		$('.baggrund').hide()
		$('.scene1').show()
		$('.scene2').hide()
		$('.scene3').hide()
		$('.henrik').addClass('henrik_move_right')
		$('.henrik').addClass('walkcycle')
		$('.henrik').removeClass('sidder_ned')



		$('.scene3').show(10000)

	});
});
