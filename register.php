<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (!empty($name) && !empty($email) && !empty($password)) {

        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;

        setcookie("saved_email", $email, time() + (7 * 24 * 60 * 60), "/");

        header("Location: profile.php");
        exit();

    } else {
        $error = "Заповніть всі поля!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>

<h2>Реєстрація</h2>

<p style="color:red;"><?php echo $error; ?></p>

<form method="POST">
    <input type="text" name="name" placeholder="Ім'я"><br><br>
    <input type="email" name="email" placeholder="Email"><br><br>
    <input type="password" name="password" placeholder="Пароль"><br><br>
    <button type="submit">Зареєструватися</button>
</form>

</body>
</html>