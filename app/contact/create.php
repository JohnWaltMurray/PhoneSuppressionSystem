<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/contact.php';

$database = new Database();
$db = $database->getConnection();

$contact = new Contact($db);

$data = json_decode(file_get_contents(""));

$contact->f_name = $data->f_name;
$contact->l_name = $data->l_name;
$contact->phone_number = $data->phone_number;
$contact->number_type = $data->number_type;

if ($product->create()) {
    echo '{';
            echo '"message": "Contact was created."';
    echo '}';
}
else {
    echo '{';
        echo '"message": "Unable to create contact."';
    echo '}';
}

?>