<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
include_once '../config/database.php';
include_once '../objects/contact.php';
 
$database = new Database();
$db = $database->getConnection();
 
$contact = new Contact($db);
 
$contact->id = isset($_GET['id']) ? $_GET['id'] : die();
 
$contact->readOne();
 
$contact_arr = array(
    "id" =>  $contact->id,
    "f_name" => $contact->f_name,
    "l_name" => $contact->l_name,
    "phone_number" => $contact->phone_number,
    "number_type" => $contact->number_type
);
 
print_r(json_encode($contact_arr));
?>