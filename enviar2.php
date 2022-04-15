<?php
$name = $_POST['name'];
$empresa = $_POST['empresa'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$para = 'martinfcastro@gmail.com';

$mensaje = "Enviado por " . $name . "\n";
$mensaje .= "Mail: " . $email . "\n";
$mensaje .= "Empresa: " . $empresa . "\n";
$mensaje .= "Teléfono: " . $telefono . "\n";
$mensaje .= "Enviado el " . date('d/m/Y') . "\n";
$mensaje .= "Mensaje: " . $message;


mail($para, utf8_decode($subject), utf8_decode($mensaje));

header("Location:send.html");
?>