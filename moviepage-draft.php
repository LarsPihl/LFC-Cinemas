<?php

require 'dbStuff/dbLoad.php';

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hand Drawn Cinema</title>
	<link rel="stylesheet" type="text/css" href="index.css">
	<link rel="stylesheet" type="text/css" href="moviepage.css">
</head>
<body>
	<?php $i = 0; //page id goes here ?>
	<div id="page<?= $i; ?>" class="page">
		<img src="<?= $fetchData[$i]['poster_url']; ?>" class="poster">
		<div class="sect1">
			<div class="info">
				<h1 class="title"><?= $fetchData[$i]['title']; ?></h1>
				<div class="genInfo">
					<span class="year"><?= $fetchData[$i]['year']; ?></span>
					<span class="genre"><?= $fetchData[$i]['genre']; ?></span>
					<span class="age"><?= $fetchData[$i]['age']; ?>+</span>
				</div>
				<h3 class="studio"><?= $fetchData[$i]['studio']; ?></h3>
				<h4 class="credit">Directed by <?= $fetchData[$i]['director']; ?></h4>
				<h4 class="credit">Written by <?= $fetchData[$i]['writer']; ?></h4>
				<h4 class="credit">Soundtrack by <?= $fetchData[$i]['composer']; ?></h4>
			</div>
			<video class="trailer" controls>
				<source src="<?= $fetchData[$i]['trailer_url']; ?>">
			</video>
		</div>
		<p class="desc"><?= $fetchData[$i]['desc']; ?></p>
	</div>
</body>
</html>
