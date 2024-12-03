<?php
$number = $_GET['number'];
$statsFile = 'OkanaganplayerStatsTotals0.csv'; // File in the same directory

$file = fopen($statsFile, 'r');
$headers = fgetcsv($file); // Read the header row

while ($row = fgetcsv($file)) {
    if ($row[0] == $number) { // Match the player's number
        echo json_encode(array_combine($headers, $row)); // Combine headers and row into JSON
        break;
    }
}
fclose($file);
?>
