var avatarSelector = $(".avatar");
var raised = false;
var canRaise = true;
avatarSelector.each(function() {
	var currentAvatar = $(this);
	currentAvatar.mouseenter(function() {
		animateAvatarText(currentAvatar, "-");
	});
	currentAvatar.mouseleave(function() {
		animateAvatarText(currentAvatar, "+");
	});
});
function animateAvatarText(avatar, sign) {
	canRaise = false;
	$(avatar).find(".avatar_text_container").find("span").transition({
		y : sign + "100px"
	}, 250, function() {
		raised = !raised;
		canRaise = true;
	});
}