
<?php

$pathname="FUDforum";
$filemode=0777;

$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($pathname));

foreach($iterator as $item) {
    echo $item . "<p>";
    chmod($item, $filemode);
}

?>

