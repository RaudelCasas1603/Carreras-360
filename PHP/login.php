<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $Correo = $_GET['correo'];

    $resultado = "";

    $sql = "SELECT id FROM Usuario
            WHERE Correo = '$Correo'";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        if (mysqli_num_rows($query) > 0) {
            // Obtiene la fila de resultados
            $row = mysqli_fetch_assoc($query);
            $id = $row['id'];
            $resultado = $id;
            echo $resultado;
        } else {
            $resultado = "No se encontraron resultados para el correo proporcionado.";
            echo $resultado;
        }
    } else {
        $resultado = "Error al insertar los datos, intenta de nuevo";
        echo $resultado;
    }
} else {
    echo "Solicitud no válida"; // Opcional: mensaje de error if no valid GET request
}
?>
