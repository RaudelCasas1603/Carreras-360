<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $carrera = $_GET['carrera'];


    $resultado = array();

    $sql = "SELECT * FROM Post
            WHERE idCarrera = '$carrera'";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        if (mysqli_num_rows($query) > 0) {
            // Obtiene todas las filas de resultados
            $resultado['posts'] = mysqli_fetch_all($query, MYSQLI_ASSOC);
        } else {
            $resultado['error'] = "No se encontraron resultados para la carrera proporcionada.";
        }
    } else {
        $resultado['error'] = "Error en la consulta SQL: " . mysqli_error($conn);
        echo json_encode($resultado);
    }
    echo json_encode($resultado);
    
}
?>
