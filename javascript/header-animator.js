var logoCanAnimate = true;
$("#header_title").mouseenter(function() {
	if (logoCanAnimate) {
		logoCanAnimate = false;
		$("#logo").find("img").transition({
			rotate : "+=360deg"
		}, 500, function() {
			logoCanAnimate = true;
		});
	}
});
$(".nav_link").each(function() {
	var link = {
		selector : $(this),
		canAnimateFadeIn : true
	};
	link.selector.mouseenter(function() {
		if (link.canAnimateFadeIn) {
			link.canAnimateFadeIn = false;
			highlightLink(link, 0.1, function() {
				link.canAnimateFadeIn = true;
			});
		}
	});
	link.selector.mouseleave(function() {
		highlightLink(link, 0);
	});
});
function highlightLink(link, newOpacity, complete) {
	link.selector.transition({
		"background-color" : "rgba(0, 0, 0, " + newOpacity + ")"
	}, 150, complete);
}