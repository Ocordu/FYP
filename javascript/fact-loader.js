$.get("data/stats/course.xml").success(function(data) {
	$(data).find("Statistic").each(function(index, statistic) {
		if ($(statistic).children("Code").text() == "DEGREECLASS") {
			$(statistic).find("Details").find("StatisticDetail").each(function(index, statisticDetail) {
				if ($(statisticDetail).find("Code").text() == "UFIRST") {
					$("#cs_facts").html($(statisticDetail).find("Value").text() + "% achieved a first.");
				}}
			);
		}
	});
});