<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

ini_set('upload_max_filesize', '40M');
ini_set('post_max_size', '40M');
ini_set("memory_limit","3000M");

move_uploaded_file($_FILES["file"]["tmp_name"], './share/' . $_FILES["file"]["name"]);
echo "The file ". htmlspecialchars( basename( $_FILES["file"]["name"])). " is sent.<br>";
echo "Logs:<br>";
echo $_FILES["file"]["error"];

echo "<br><a href='index.php'>Go Back...</a>";
