var page = {
	HOME: 0,
	PROFILES: 1,
	PROFILE: 2,
	HEALTH_AND_SAFETY: 3,
	FACTS: 4,
	properties: {
		0: {htmlName: "home"},
		1: {htmlName: "profiles"},
		2: {htmlName: "profile"},
		3: {htmlName: "health-and-safety"},
		4: {htmlName: "facts"}
	}
};
var pageFromOrdinal = [page.HOME, page.PROFILES, page.PROFILE, page.HEALTH_AND_SAFETY, page.FACTS];
var currentPage = page.HOME;
var panel = {
	A: 0,
	B: 1,
	properties: {
		0: {htmlName: "a"},
		1: {htmlName: "b"}
	}
};
var currentPanel = panel.A;
var canSwap = true;
$("#panel_" + getCurrentPanelHTMLName()).load(getPageLocation(getCurrentPageHTMLName()));
$(".home").on("click", function(event) {
	swapPage("home", event);
});
$(".header_link").each(function() {
	$(this).on("click", function(event) {
		swapPage($(this).attr("id"), event);
	});
});
function swapPage(newPageHTMLName, event) {
	event.preventDefault();
	if (getCurrentPageHTMLName() != newPageHTMLName && canSwap) {
		canSwap = false;
		var translateTime = 350;
		var newPage = getPageFromHTMLName(newPageHTMLName);
		var direction = "+";
		if (currentPage - newPage > 0) {
			direction = "-";
		}
		$("#panel_" + getCurrentPanelHTMLName()).transition({x : direction + "100vw"}, translateTime, function() {
			$("#panel_" + getCurrentPanelHTMLName()).css("display", "none");
			if (currentPanel == panel.A) {
				currentPanel = panel.B;
			} else {
				currentPanel = panel.A;
			}
			var newPanel = $("#panel_" + getCurrentPanelHTMLName());
			newPanel.css("display", "flex");
			if (direction == "+") {
				direction = "-";
			} else {
				direction = "+";
			}
			newPanel.css("translate", direction + "100vw");
			newPanel.load(getPageLocation(newPageHTMLName), function() {
				loadJS(newPage);
				$(newPanel).transition({x : "0vw"}, translateTime, function() {
					currentPage = newPage;
					canSwap = true;
				});
			});
		});
	}
}
function getPageFromHTMLName(pageHTMLName) {
	for (var page in pageFromOrdinal) {
		if (pageFromOrdinal.hasOwnProperty(page)) {
			if (this.page.properties[page].htmlName == pageHTMLName) {
				return page;
			}
		}
	}
}
function loadJS(newPage) {
	switch(parseInt(newPage)) {
		case page.PROFILES:
			$.getScript("javascript/avatar-animator.js");
			$.getScript("javascript/profile-loader.js");
			break;
		case page.PROFILE:
			$.getScript("javascript/fetch-avatar.js");
			break;
	}
}
function getCurrentPageHTMLName() {
	return page.properties[currentPage].htmlName;
}
function getCurrentPanelHTMLName() {
	return panel.properties[currentPanel].htmlName;
}
function getPageLocation(pageHTMLName) {
	return "html/" + pageHTMLName + ".html";
}