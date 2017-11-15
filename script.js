$(document).ready(function () {
	$('.scene1').hide()
	$('.scene2').hide()
	$('.scene3').hide()


	var audio = $("#mysoundclip")[0];
	var audio1 = $("#mysoundclip1")[0];
	var audio2 = $("#mysoundclip2")[0];
	$("button").click(function () {
		audio.play();
		$('.forside').hide()
		$('.baggrund').hide()
		$('.scene1').show()
		$('.henrik').addClass('sidder_ned')

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
		audio.pause();
		audio2.play();
		$('.baggrund').hide()
		$('.scene1').hide()
		$('.scene2').hide()
		$('.scene3').show()

	});
	$(".tlfsend").click(function () {
		audio1.play();
		$('.baggrund').hide()
		$('.henrik .telefon').hide()
		$('.scene1').show()
		$('.scene2').hide()
		$('.scene3').hide()
		$('.tale').hide()
		$('.henrik').addClass('henrik_move_right')
		$('.henrik').addClass('walkcycle')
		$('.henrik').removeClass('sidder_ned')



		$('.scene3').show(10000)

	});
});
