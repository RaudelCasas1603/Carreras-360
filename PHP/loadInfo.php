<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $id = $_GET['id'];

    $resultado = "";

    $sql = "SELECT * FROM Usuario
            WHERE id = '$id'";
    $query = mysqli_query($conn, $sql);

    if($query) {
        if (mysqli_num_rows($query) > 0) {
            // Obtiene la fila de resultados
            $row = mysqli_fetch_assoc($query);
            $resultado = $row;
            echo json_encode($resultado);
        } else {
            $resultado = "No se encontraron resultados para el correo proporcionado.";
            echo $resultado;
        }
    } else {
        $resultado = "Error al insertar los datos, intenta de nuevo";
        echo $resultado;
    }
}

?>
