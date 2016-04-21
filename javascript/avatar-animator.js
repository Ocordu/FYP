var avatarSelector = $(".avatar");
avatarSelector.each(function() {
	var currentAvatar = $(this);
	currentAvatar.mouseenter(function() {
		animateAvatar(currentAvatar, "enter");
	});
	currentAvatar.mouseleave(function() {
		animateAvatar(currentAvatar, "leave");
	});
});
function animateAvatar(avatar, animation) {
	var duration = 175;
	var newBlur = "0px";
	var newBrightness = "100%";
	var newGrayscale = "0%";
	var newImageScale = 1.0;
	if (animation == "enter") {
		newBlur = "2px";
		newBrightness = "80%";
		newGrayscale = "100%";
		newImageScale = 1.1;
	}
	$(avatar).find("img").transition({
		"-webkit-filter" : "blur(" + newBlur + ") brightness(" + newBrightness + ") grayscale(" + newGrayscale + ")",
		scale : newImageScale
	}, duration);
	var newTextPosition = "0vw";
	if (animation == "enter") {
		newTextPosition = "-5vw";
	}
	$(avatar).find(".avatar_text_container").transition({
		y : newTextPosition
	}, duration);
}