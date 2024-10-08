<?php 

    $discsList = file_get_contents("../db/dischi.json");
    // prelevo file che mi interessa col percorso

    header("Content-Type: application/json");
    // Dichiaro che l'esposizione avverrà tramite il linguaggio json

    echo ($discsList);
    // espongo il contenuto prelevato dal file

?>