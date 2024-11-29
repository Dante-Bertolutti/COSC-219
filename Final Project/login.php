<?php
$servername = "localhost";
$database = "u256863105_ocPlayerLogin";
$username = "u256863105_dantebertolutt";
$password = "dBert7777";
 
// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
 
if (!$conn) {
 
    die("Connection failed: " . mysqli_connect_error());
 
}
echo "Connected successfully";
mysqli_close($conn);
?>