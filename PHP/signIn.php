<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $Nombre = $_GET['nombre'];

    $resultado = "";

    $sql = "INSERT INTO Usuario(Nombre) 
            VALUES('$Nombre')";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        $lastInsertID = mysqli_insert_id($conn); // Get the last inserted ID
        echo $lastInsertID;
    } else {
        $resultado = "Error al insertar los datos, intenta de nuevo";
        echo $resultado;
    }
} else {
    echo "Solicitud no válida"; // Opcional: mensaje de error if no valid GET request
}
?>
