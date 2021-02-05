<?php

if ( $_POST["submit"] ) {
  $recipient   = "s.vasilyev12@gmail.com";
  $subject     = "Form to email message";
  $sender      = $_POST["name"];
  $senderEmail = $_POST["email"];
  $message     = $_POST["message"];

  $mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

  mail( $recipient, $subject, $mailBody, "From: $sender <$senderEmail>" );

  echo $thankYou = "<p>Thank you, $sender ! Your message has been sent.</p>";

  $log = "Name: $sender; Email: $senderEmail; Message: $message";

  $file = Fopen("log.txt","a+"); //create a file if not exists

  fwrite($file,"\n".$log); // fwrite(file_object, data to store);
}

?>
