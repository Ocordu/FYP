$.get("data/stats/course.xml").success(function(data) {
	//loop through all of the Statistic nodes
	$(data).find("Statistic").each(function(index, statistic) {
		//if the current Statistic node's child node Code contains the text DEGREECLASS
		if ($(statistic).children("Code").text() == "DEGREECLASS") {
			//loop through all of this Statistic node's detail node's StatisticDetail's nodes
			$(statistic).find("Details").find("StatisticDetail").each(function(index, statisticDetail) {
				//if the current statistic detail's code node has text UFIRST
				if ($(statisticDetail).find("Code").text() == "UFIRST") {
					//$(statisticDetail).find("Value").text() is the percentage
					$("#cs_facts").html($(statisticDetail).find("Value").text() + "% achieved a first.");
				}}
			);
		}
	});
});