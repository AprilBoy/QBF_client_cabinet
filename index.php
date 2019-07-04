<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Список страниц</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">

    <style media="screen">
        body {
            font-family: sans-serif;
        }

        a {
            color: #333;
            text-decoration: none;
            text-align: left;
            display: block;
            padding: 10px;
            border: 1px solid #eee;
            margin-bottom: 10px;
            background: #f2f2f2;
            font-weight: bold;
        }

        a span {
            float: right;
            display: block;
            background: #333;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            text-align: center;
            margin-top: 0px;
            line-height: 20px;
            font-size: 14px;
            color: #fff;
            font-weight: normal;
        }

        a:hover {
            background: #eee;
            border: 1px solid #ada0a0;
        }

        a:visited {
            border: 1px solid #007fb0;
            background: #fff;
        }

        .logo {
            background: #333;
            padding: 10px 20px;
            height: 80px;
            margin-bottom: 50px;

        }

        .logo img {
            height: 60px;
            margin-top: 10px;
            display: block;
        }

        body,
        html {
            padding: 0;
            margin: 0;
        }
        .element{
            margin: 0 20px;
        }
    </style>
</head>

<body>

    <div class="logo">
        <img src="images/main/logo.svg" alt="">
    </div>
    <?php
	$files = scandir('.');
	$i=1;
	foreach ($files as $file) {
		if (preg_match_all('/(.*?)\.html/',$file,$q)) {
			echo '<div class="element"><a href="http://'.$_SERVER['HTTP_HOST'].'/'.basename(__DIR__).'/'.$file.'" target="_blank"><small>Страница:</small> '.$file.' <span> '.$i.'</span></a></div>';
			$i++;
		}
	}

?>

</body>

</html>
