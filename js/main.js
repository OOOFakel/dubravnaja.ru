function changeHeight() {
	var pageWidth = $(window).width()
	if ($("#info-block").width() < pageWidth - 50)
		$("#info-block").height($("#main-photo").height());
	// else
		// $("#info-block").css('width','auto');
}

$(document).ready(function () {
	changeHeight()
})

$(window).resize(function() {
	changeHeight()
});