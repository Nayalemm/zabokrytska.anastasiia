<?php
session_start();

// очистити сесію
session_unset();
session_destroy();

// видалити cookie
setcookie("saved_email", "", time() - 3600, "/");

// повернення
header("Location: index.php");
exit();
?>