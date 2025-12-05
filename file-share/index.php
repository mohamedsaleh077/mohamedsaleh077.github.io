<html>
<head>
    <title>Web Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <form action="./upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="upload">
    </form>
    <?php
        $handle = opendir('./share');
        while (false !== ($entry = readdir($handle))) {
            echo "<ul>";
            echo "<li><img src='share/$entry'></li>";
            echo "<li><a href='./share/$entry'>$entry</a></li>";
            echo "</ul>";
        }
    ?>
</body>
</html>