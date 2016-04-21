$("#title").mouseenter(function() {
	$("#logo").find("img").transition({
		rotate : "+=360deg"
	}, 500);
});
$(".nav_link").each(function() {
	$(this).mouseenter(function() {
		highlightLink($(this), 0.1);
	});
	$(this).mouseleave(function() {
		highlightLink($(this), 0);
	});
});
function highlightLink(link, opacity) {
	link.transition({
		"background-color" : "rgba(0, 0, 0, " + opacity + ")"
	}, 150);
}