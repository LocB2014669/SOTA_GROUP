<?php phpinfo(); ?>
<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getCateById()
    {
        $db = new Connect;
        $data = [];

        $query = $db->prepare("SELECT * FROM table_product_cat WHERE id_list=108");
        $query->execute();

        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $proudct_cat = array(
                'id' => $result['id'],
                'tenvi' => $result['tenvi'],
                'type' => $result['type'],
                // 'category_name' => $result['category_name']
            );
            array_push($data, $proudct_cat);
        }

        return json_encode($data);
    }
}
$API = new API;
header('Content-Type: application/json');
echo $API->getCateById();
