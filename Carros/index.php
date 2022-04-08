<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y Modelo de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "tienda_online";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlCarros = mysqli_query($conexionBD,"SELECT * FROM productos WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlCarros) > 0){
       $Carros = mysqli_fetch_all($sqlCarros,MYSQLI_ASSOC);
        echo json_encode($Carros);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlCarros = mysqli_query($conexionBD,"DELETE FROM productos WHERE id=".$_GET["borrar"]);
    if($sqlCarros){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de Modelo y detalles
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $Modelo=$data->Modelo;
    $Descripcion=$data->Descripcion;
    $Precio=$data->Precio;

        if(($Descripcion!="")&&($Modelo!="")){
            
            $sqlCarros = mysqli_query($conexionBD,"INSERT INTO productos(nombre,descripcion,precio) VALUES('$Modelo','$Descripcion','$Precio') ");
            echo json_encode(["success"=>1]);
        }

    exit();
}
// Actualiza datos pero recepciona datos de Modelo, detalles y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
        $Modelo=$data->Modelo;
        $Descripcion=$data->Descripcion;
        $Precio=$data->Precio;

        // $sqlCarros = mysqli_query($conexionBD,"INSERT INTO productos(nombre,descripcion,precio) VALUES('$Modelo','$Descripcion','$Precio') ");
       $sqlCarros = mysqli_query($conexionBD,"UPDATE productos SET nombre='$Modelo',descripcion='$Descripcion',precio='$Precio' WHERE id='$id'");
    echo json_encode(["success"=>1]);


    

    // console.log($sqlCarros);

    exit();
}
// Consulta todos los registros de la tabla productos
$sqlCarros = mysqli_query($conexionBD,"SELECT * FROM productos ");
if(mysqli_num_rows($sqlCarros) > 0){
   $Carros = mysqli_fetch_all($sqlCarros,MYSQLI_ASSOC);
    echo json_encode($Carros);
}
else{ echo json_encode([["success"=>0]]); }


?>

