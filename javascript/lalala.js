$(document).ready(function() {
    $.ajax({
		type: "GET",
		url: "data/stats/course.xml",
		dataType: "xml"
	}).success(function(data) {
		$(data).find("Statistic").each(function() {
			if ($(this).find("Code").text() == "DEGREECLASS") {
				$(this).find("Details").find("StatisticDetail").each(function() {
					if ($(this).find("Code") == "UFIRST") {
						var percent = $(this).find("Value").text();
						//Now we output the HTML knowing that the percentage represents the group that achieved a first.
					}}
				);
			}
		});
	});
});