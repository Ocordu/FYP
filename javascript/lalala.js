$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "../data/stats/course.xml",
    dataType: "xml",
    success: xmlParser
});
});

$(xml).find("Statistic").each(function () {
    if ($(this).find("Code").text() == "DEGREECLASS") {
        $(".main").append('<div class="degree_class"><div class="type_class">' + $(this).find("Code").text() +   '</div><div   class="percentage_class"> ' + $(this).find("Value").text() + '</div></div>');
        //USE JS TO INSERT HTML CODE WITH DEGREE STATS
    }
});