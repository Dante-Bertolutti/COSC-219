<?php
$number = $_GET['number'];
$statsFile = '/mnt/data/OkanaganplayerStatsTotals0.csv';

$file = fopen($statsFile, 'r');
$headers = fgetcsv($file);

while ($row = fgetcsv($file)) {
    if ($row[0] == $number) {
        echo json_encode(array_combine($headers, $row));
        break;
    }
}
fclose($file);
?>
