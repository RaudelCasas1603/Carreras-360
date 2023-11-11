<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $id = $_GET['id'];
    $texto = $_GET['texto'];
    $idCarrera = $_GET['idCarrera'];

    $resultado = "";

    $sql = "INSERT INTO Post (idCarrera, idUsuario, Texto)
            VALUES ('$idCarrera', '$id', '$texto')";
    $query = mysqli_query($conn, $sql);

    if($query) {
        $resultado = "Post insertado correctamente";
    } else {
        $resultado = "Error al insertar el post: " . mysqli_error($conn);
    }

    // Envía el resultado como respuesta
    echo $resultado;
}
?>
