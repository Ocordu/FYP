$(".avatar").each(function() {
	$(this).on("click", function(event) {
		currentProfile = getProfileFromHTMLName($(this).attr("id"));
		swapPage("profile", event);
	});
});