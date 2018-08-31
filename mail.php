<?php

require_once('mail/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$somText = $_POST['somText'];

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'xalkovich'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Kjpjdcrbq123456'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('xalkovich@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('kirill.lozovski@gmail.com');     // Кому будет уходить письмо
$mail->addAddress('	pavlik.soundmusic.govor@gmail.com');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Обратная связь с сайта TwoCooms';
$mail->Body    = 'Имя - '.$name.'<br>Email - '.$email.'<br>Коментарий - '.$somText;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    // header('location: thank-you.html');
}
?>