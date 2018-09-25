<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=YTF-8");

    include_once '../config/database.php';
    include_once '../objects/product.php';

    $database = new Database();
    $db = $database->getConnection();

    $contact = new Contact($db);

    $statement = $product->read();
    $number_of_rows = $statement->rowCount();

    if ($number_of_rows > 0) {
        $contacts_array = array();

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $contact_unit=array (
                "id" => $id,
                "f_name" => $f_name,
                "l_name" => $l_name,
                "phone_number" => $phone_number,
                "number_type" => $type;
            );

            array_push($contacts_array, $contact_unit);
        }

        echo json_encode($contacts_array);
    }
    else {
        echo json_encode(
            array("message" => "No contacts found.");
        )
    }

?>