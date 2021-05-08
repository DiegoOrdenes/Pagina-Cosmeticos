<?php

$nombre = $_POST["vnombre"];
$correo = $_POST["vcorreo"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';


$mail = new PHPMailer(true);

try {
   
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'fabianzambrano634@gmail.com';                     //SMTP username
    $mail->Password   = 'estriker123';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('fabianzambrano634@gmail.com', 'tienda cosmeticos:');
    $mail->addAddress('fabi.sktt1@gmail.com');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body    = $mensaje;

    $mail->send();
    echo '<script>
    alert("El mensaje ha sido enviado con exito");
    window.history.go(-1);
    </script>'
    ;
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
}