<!DOCTYPE html>
<html>
	<head>
		<title>COMP_SCI[1]</title>
		<link href = "https://fonts.googleapis.com/css?family=Pathway+Gothic+One" rel = "stylesheet" type = "text/css">
		<link rel = "stylesheet" type = "text/css" href = "style.css">
	</head>
	<body>
		<div id = "container">
			<div id = "header">
				<div id = "logo">
					<img src = "logo.svg">
				</div>
				<div id = "title">
					COMP_SCI[1]
				</div>
			</div>
			<div id = "content_container">
				<div class = "content_title">
					Random binary numbers generated with PHP (normally I would recommend JS for something like this; this is a proof of concept)
				</div>
				<?php
					function echoRandomBinary() {
						$length = mt_rand(100, 1000);
						for ($i = 0; $i < $length; $i++) {
							echo mt_rand(0, 1);
						}
					}
					for ($i = 0; $i < 5; $i++) {
						echo "<div class = \"content\">";
						echoRandomBinary();
						echo "</div>";
					}
				?>
			</div>
		</div>
	</body>
</html>