<?php
	header("Authorization: Basic 4MTU4EHH6RKQXZYEMK04");
	$data = file_get_contents("http://4MTU4EHH6RKQXZYEMK04:killme@data.unistats.ac.uk/api/v3/KIS/Institution/10007798/Course/242/FullTime/Statistics.XML");
	//The following code was adapted from http://www.w3schools.com/php/php_file_create.asp
	$stats = fopen("data/stats/course.xml", "w");
	fwrite($stats, $data);
	fclose($stats);