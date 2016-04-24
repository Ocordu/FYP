$(".avatar").each(function() {
	var avatar = {
		selector : $(this),
		canAnimateTextShow : true
	};
	avatar.selector.mouseenter(function() {
		if (avatar.canAnimateTextShow) {
			avatar.canAnimateTextShow = false;
			animateAvatar(avatar, "enter", function() {
				avatar.canAnimateTextShow = true;
			});
		}
	});
	avatar.selector.mouseleave(function() {
		animateAvatar(avatar, "leave");
	});
});
function animateAvatar(avatar, animation, complete) {
	var duration = 200;
	var newBlur = "0px";
	var newBrightness = "100%";
	var newGrayscale = "0%";
	var newImageScale = 1.0;
	if (animation == "enter") {
		newBlur = "2px";
		newBrightness = "80%";
		newGrayscale = "100%";
		newImageScale = 1.2;
	}
	avatar.selector.find("img").transition({
		"-webkit-filter" : "blur(" + newBlur + ") brightness(" + newBrightness + ") grayscale(" + newGrayscale + ")",
		scale : newImageScale
	}, duration);
	var newTextPosition = "0vw";
	if (animation == "enter") {
		newTextPosition = "-5rem";
	}
	avatar.selector.find(".avatar_text_container").transition({
		y : newTextPosition
	}, duration, complete);
}