<!--
	Unless otherwise stated, all code in this project was written by the members of this group.
	jQuery's documentation and jQuery Transit's home page were referred to while writing the JavaScript code.
	Note that the following website was used to learn about enums in JavaScript: https://stijndewitt.com/2014/01/26/enums-in-javascript/
-->
<?php
	require("php/update-stats.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title>COMP_SCI[1]</title>
	<!--The following line was copied from Google Fonts.-->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One">
	<!--The following line was copied from Google Fonts.-->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lobster+Two:700">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="javascript/jquery-2.2.3.min.js"></script>
	<script src="javascript/jquery.transit.min.js"></script>
	<script src="javascript/prefilter.js"></script>
	<script src="javascript/script-loader.js"></script>
</head>
<body>
<div id="container">
	<div id="header_wrapper">
		<div id="header">
			<div id="logo">
				<a href="#" class="home"><img src="assets/logo.svg"></a>
			</div>
			<a href="#" class="home" id="header_title">COMP_SCI[1]</a>
			<div id="header_links">
				<a href="#" class="header_link" id="profiles">Profiles</a>&nbsp;<a href="#" class="header_link" id="health-and-safety">H&S</a>&nbsp;<a href="#" class="header_link" id="facts">Facts</a>&nbsp;<a href="#" class="header_link" id="languages">Languages</a>
			</div>
		</div>
	</div>
	<div id="panel_a"></div>
	<div id="panel_b"></div>
</div>
</body>
</html>
