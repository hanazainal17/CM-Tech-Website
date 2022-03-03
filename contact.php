
<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
//$mail = new PHPMailer(true);

//Extract data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$clientEmail = $_POST['email'];
$subject = $_POST['subject'];
$query = $_POST['message'];
$body = "Name: $firstName $lastName <br> Email: $clientEmail <br> Message: $query <br>";
$res = "";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

 try {
     //Configuration 
     $mail -> isSMTP();
     $mail -> Host = "smtp.gmail.com";
     $mail -> Username = "cmtech.test1@gmail.com";
     $mail -> Password = 'cmtech@2022';
     $mail -> SMTPAuth = true;
     $mail -> Port = 587;
     $mail -> SMTPSecure = 'tls';
     $mail -> setFrom($clientEmail);
     $mail -> addAddress('hana@cmtech.asia');
     $mail -> isHTML(true);
     $mail -> Subject = $subject;
     $mail -> Body = $body;
     $mail -> AltBody = strip_tags($body);
     $mail -> send();
     $res = "Email is sent successfully";
 } 
 catch(exception $e){
     $res = "Message could not be sent. Mailer Error: $mail -> ErrorInfo";
    }





