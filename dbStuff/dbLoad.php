<?php

$database = new PDO('sqlite:dbStuff/movieinfo.db');

$fetchData = $database->query("
	SELECT *
	FROM movieinfo
	")->fetchAll();			//Put columns in order when done!

/*foreach ($fetchData[0] as $value){
	var_dump($value);
	echo "<br>";
}*/
