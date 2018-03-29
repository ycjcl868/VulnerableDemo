<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hi</title>
</head>
<body>
  <?php
    error_reporting(0);

    // csrf_token
    $csrf_token = md5(uniqid(rand(), TRUE));
    $_SESSION['csrf_token'] = $csrf_token;
    echo $_SESSION['csrf_token'];
    if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
      echo "no token...";
      return;
    }
  ?>
  <input type="hidden" id="csrf_token" value="<?php echo $csrf_token; ?>" />
  <?
    if((string)$_POST['param1']!==(string)$_POST['param2'] && md5($_POST['param1'])===md5($_POST['param2'])){
      echo "flag{this is right}";
    } else {
      echo "plase try again";
    }
  ?>


</body>
</html>
