<?php
$servername = "localhost";
$database = "u256863105_ocPlayerLogin";
$username = "u256863105_dantebertolutti";
$password = "dBert7777";
 
// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
 
if (!$conn) {
 
    die("Connection failed: " . mysqli_connect_error());
 
}
echo "Connected successfully";
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
}


mysqli_close($conn);
?>