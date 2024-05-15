<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getAllBrand()
    {
        $db = new Connect;
        $data = [];

        $query = $db->prepare("SELECT * FROM table_product_brand ORDER BY stt ASC");
        $query->execute();

        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $product_brand = array(
                'id' => $result['id'],
                'title' => $result['tenvi'],
                'photo' => $result['photo'],
                'stt' => $result['stt'],
                'noibat' => $result['noibat'],
                // 'category_name' => $result['category_name']
            );
            array_push($data, $product_brand);
        }

        return json_encode($data);
    }
}
$API = new API;
header('Content-Type: application/json');
echo $API->getAllBrand();
