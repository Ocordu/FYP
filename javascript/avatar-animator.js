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
	var brightness = "100%";
	if (animation == "enter") {
		brightness = "35%";
	}
	$(avatar).find("img").transition({
		"-webkit-filter" : "brightness(" + brightness + ")"
	}, duration, function() {
	});
	var newTextPosition = "0vw";
	if (animation == "enter") {
		newTextPosition = "-5vw";
	}
	$(avatar).find(".avatar_text_container").find("span").transition({
		y : newTextPosition
	}, duration, function() {
	});
}