var page = "home.html";
var panel = "a";
$("document").ready(function () {
	$("#panel_a").load("home.html");
	$(".home").on("click", function (event) {
		swapPage("home.html", event);
	});
	$("#profiles").on("click", function (event) {
		swapPage("profiles.html", event);
	});
	$("#hns").on("click", function (event) {
		swapPage("health-and-safety.html", event);
	});
});
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