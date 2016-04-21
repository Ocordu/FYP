var profile = {
	BEN: 0,
	FERNANDO: 1,
	WARREN: 2,
	DIANA: 3,
	properties: {
		0: {htmlName: "ben"},
		1: {htmlName: "fernando"},
		2: {htmlName: "warren"},
		3: {htmlName: "diana"}
	}
};
var profileFromOrdinal = [profile.BEN, profile.FERNANDO, profile.WARREN, profile.DIANA];
var currentProfile;
$(".avatar").each(function() {
	$(this).on("click", function(event) {
		currentProfile = getProfileFromHTMLName($(this).attr("id"));
		swapPage("profile", event);
	});
});
function getProfileFromHTMLName(profileHTMLName) {
	for (var profile in profileFromOrdinal) {
		if (profileFromOrdinal.hasOwnProperty(profile)) {
			if (this.profile.properties[profile].htmlName == profileHTMLName) {
				return profile;
			}
		}
	}
}