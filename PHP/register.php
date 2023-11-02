<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $ID = $_GET['id'];
    $Ocupacion = $_GET['ocupacion'];
    $Carrera = $_GET['carrera'];

    $resultado = "";

    $sql = "UPDATE Usuario SET Estado = '$Ocupacion', Carrera = '$Carrera' WHERE id = '$ID'";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        $lastInsertID = mysqli_insert_id($conn); // Get the last inserted ID
        echo "Los campos 'estado' y 'carrera' se actualizaron con éxito para el usuario con ID $id";
    } else {
        $resultado = "Error al insertar los datos, intenta de nuevo";
        echo $resultado;
    }
} else {
    echo "Solicitud no válida"; // Opcional: mensaje de error if no valid GET request
}
?>
