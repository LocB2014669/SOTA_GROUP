<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getAllcategory()
    {
        $db = new Connect;
        $data = [];

        $query = $db->prepare("SELECT * FROM table_product_list ORDER BY id ASC");
        $query->execute();

        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $product_list_id = $result['id'];
            $product_list_name = $result['tenvi'];
            $product_list_photo = $result['photo'];

            $category = array(
                'id' => $product_list_id,
                'title' => $product_list_name,
                'photo' => $product_list_photo,
                'items' => []
            );
            $subQuery = $db->prepare("SELECT tenvi FROM table_product_cat WHERE id_list = :categoryId");
            $subQuery->bindParam(':categoryId', $product_list_id);
            $subQuery->execute();

            while ($subResult = $subQuery->fetch(PDO::FETCH_ASSOC)) {
                $category['items'][] = array(
                    'title' => $subResult['tenvi'],
                    'href' => '#'
                );
            }

            $data[] = $category;
        }

        return json_encode($data);
    }
}

$API = new API;
header('Content-Type: application/json');
echo $API->getAllcategory();
