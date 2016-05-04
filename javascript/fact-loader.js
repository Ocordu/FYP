$.ajax({
	type: "GET",
	url: "data/stats/course.xml",
	dataType: "xml"
}).success(function(data) {
	$(data).find("Statistic").each(function() {
		alert($(this).find("Code").text());
		if ($(this).find("Code").text() == "DEGREECLASS") {
			$(this).find("Details").find("StatisticDetail").each(function() {
				if ($(this).find("Code") == "UFIRST") {
					var percent = $(this).find("Value").text();
					alert("yes");
					$("#cs_facts").html(percent + "% achieved a first.");
				}}
			);
		}
	});
});