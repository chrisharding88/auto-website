<?php 






require_once ('PHPMailer/PHPMailerAutoload.php');

echo "Hello World";

$errors = array();
$data = array();

//validate the variables

if(empty($_POST['FirstName'])){
	$errors['FirstName'] = 'First Name is required.';
}

if(empty($_POST['LastName'])){
	$errors['LastName'] = 'Last Name is required.';
}
if(empty($_POST['Email'])){
	$errors['Email'] = 'Email is required.';
}
if(empty($_POST['PrimaryPhone'])){
	$errors['PrimaryPhone'] = 'Primary Phone is required.';
}
if(empty($_POST['Message'])){
	$errors['Message'] = 'Message is required.';
}



//create an instance of PHPMailer

if (! empty($errors)){
	$data['success'] = false;
	$data['errors'] = $errors;
} else {

$mail = new PHPMailer();

$mail->IsSMTP
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host ="smtp.gmail.com"
$mail->Username = "chrisharding88@gmail.com"
$mail->Password = "Hardford"
$mail->Post = 465; /// or 587
$mail->IsHTML(true);
$mail->Body = $_POST['Message'];
$mail->AddAddress('');

if (!mail->send()){

	echo "Mail Error: ".$mail->ErrorInfo;

}else{
	$data['success'] = true;
	$data['sentMessage'] = 'Email Sent';
}




}

echo json_encode($data);


?>