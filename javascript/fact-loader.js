$.get("data/stats/course.xml").success(function(data) {
	$(data).find("Statistic").each(function(index, object) {
		alert($(object).find("Code").text());
		if ($(object).find("Code").text() == "DEGREECLASS") {
			alert($(object).find("Code").text());
		}
	});
});