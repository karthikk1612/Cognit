<?php
$to = $_POST['email'];
$email_from = 'karthikk1612@gmail.com';
$email_subject = "New Form submission";
$headers="Well played";
$email_body = "You have received a new message from the user\n".
                            "Here is the message:\n".;
mail($to,$email_subject,$email_body,$headers);


?>