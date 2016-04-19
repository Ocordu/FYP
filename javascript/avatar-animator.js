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
	var duration = 200;
	var newBlur = "0px";
	var newBrightness = "100%";
	var newGrayscale = "0%";
	var newDivScale = 1;
	var newImageScale = 1;
	if (animation == "enter") {
		newBlur = "3px";
		newBrightness = "85%";
		newGrayscale = "100%";
		newDivScale = 1.05;
		newImageScale = 1.03;
	}
	$(avatar).transition({
		scale : newDivScale
	}, duration);
	$(avatar).find("img").transition({
		"-webkit-filter" : "blur(" + newBlur + ") brightness(" + newBrightness + ") grayscale(" + newGrayscale + ")",
		scale : newImageScale
	}, duration);
	var newTextPosition = "0vw";
	if (animation == "enter") {
		newTextPosition = "-5vw";
	}
	$(avatar).find(".avatar_text_container").find("span").transition({
		y : newTextPosition
	}, duration);
}