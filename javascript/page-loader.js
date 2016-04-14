var page = getPageLocation("home");
var panel = "a";
$("document").ready(function() {
	$("#panel_a").load(getPageLocation("home"));
	$(".home").on("click", function(event) {
		swapPage(getPageLocation("home"), event);
	});
	$(".nav_link").each(function() {
		$(this).on("click", function(event) {
			swapPage(getPageLocation($(this).attr("id")), event);
		});
	});
});
function getPageLocation(pageName) {
	return "html/" + pageName + ".html";
}
function swapPage(newPage, event) {
	event.preventDefault();
	if (page != newPage) {
		var fadeTime = 175;
		$("#panel_" + panel).fadeOut(fadeTime, function() {
			if (panel == "a") {
				panel = "b";
			} else {
				panel = "a";
			}
			$("#panel_" + panel).load(newPage, function() {
				$("#panel_" + panel).fadeIn(fadeTime, function() {
					if (page == getPageLocation("profiles")) {
						$.getScript("javascript/avatar-animator.js");
					}
				});
			});
		});
		page = newPage;
	}
}