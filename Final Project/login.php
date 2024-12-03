<?php
$servername = "localhost";
$database = "u256863105_ocPlayerLogin";
$username = "u256863105_dantebertolutt";
$password = "dBert7777";

$conn = mysqli_connect($servername, $username, $password, $database);

$input_username = $_POST['username'];
$input_password = $_POST['password'];

$query = "SELECT * FROM users WHERE username = '$input_username' AND password = '$input_password'";
$result = mysqli_query($conn, $query);

$user = mysqli_fetch_assoc($result);
$number = $user['number'];

header("Location: playerpage.html?username=$input_username&number=$number");
mysqli_close($conn);
?>
