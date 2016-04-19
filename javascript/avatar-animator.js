var avatarSelector = $(".avatar");
avatarSelector.each(function() {
	var currentAvatar = $(this);
	currentAvatar.mouseenter(function() {
		animateAvatar(currentAvatar, "-");
	});
	currentAvatar.mouseleave(function() {
		animateAvatar(currentAvatar, "+");
	});
});
function animateAvatar(avatar, sign) {
	var brightness = "100%";
	if (sign == "-") {
		brightness = "35%";
	}
	$(avatar).find("img").transition({
		"-webkit-filter" : "brightness(" + brightness + ")"
	}, 250, function() {
	});
	$(avatar).find(".avatar_text_container").find("span").transition({
		y : sign + "5vw"
	}, 250, function() {
	});
}