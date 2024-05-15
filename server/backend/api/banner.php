<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getImgBanner()
    {
        $db = new Connect;
        $banner = array();
        $data = [];
        $query = $db->prepare("SELECT * FROM table_photo");
        $query->execute();
        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $banner = array(
                'id' => $result['id'],
                'photo' => $result['photo']
            );
            array_push($data, $banner);
        }

        return json_encode($data);
    }
}

$API = new API;
header('Content-Type: application/json');
echo $API->getImgBanner();
