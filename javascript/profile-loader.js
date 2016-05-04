$(".avatar").each(function() {
	$(this).on("click", function(event) {
		currentProfile = getProfileFromHTMLName($(this).attr("id"));
		swapPage("profile", event, function() {
			var name = profile.properties[currentProfile].htmlName;
			$.get("data/profiles/" + name + ".xml").success(function(data) {
				var xml = $(data);
				var fullName = xml.find("name");
				$(".avatar").append("<img src='assets/" + name + ".jpg'>");
				$("#profile_header").append(fullName);
				$("#profile_content").html(xml.find("summary").text());
			});
		});
	});
});