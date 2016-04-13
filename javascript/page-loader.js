var page = getPageLocation("home");
var panel = "a";
$("document").ready(function() {
	$("#panel_a").load(getPageLocation("home"));
	$(".home").on("click", function(event) {
		swapPage(getPageLocation("home"), event);
	});
	$("#profiles").on("click", function(event) {
		swapPage(getPageLocation("profiles"), event);
	});
	$("#hns").on("click", function(event) {
		swapPage(getPageLocation("health-and-safety"), event);
	});
});
function getPageLocation(pageName) {
	return "html/" + pageName + ".html";
}
function swapPage(newPage, event) {
	event.preventDefault();
	if (page != newPage) {
		var fadeTime = 175;
		$("#panel_" + panel).fadeOut(fadeTime, function () {
			if (panel == "a") {
				panel = "b";
			} else {
				panel = "a";
			}
			$("#panel_" + panel).load(newPage, function () {
				$("#panel_" + panel).fadeIn(fadeTime);
			});
		});
		page = newPage;
	}
}