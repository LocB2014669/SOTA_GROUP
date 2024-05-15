<?php phpinfo(); ?>
<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getGalleryById($productId)
    {
        $db = new Connect;
        $photoGallery = [];
        $query = $db->prepare("SELECT* FROM table_gallery WHERE id_photo=:productId ORDER BY stt ASC");
        $query->bindParam(':productId', $productId, PDO::PARAM_INT);
        $query->execute();
        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $item = array(
                'id' => $result['id'],
                'id_photo' => $result['id_photo'],
                'photo' => $result['photo'],
            );
            array_push($photoGallery, $item);
        }



        return json_encode($photoGallery);
    }
}

$API = new API;

if (isset($_GET['id'])) {
    $productId = $_GET['id'];
    header('Content-Type: application/json');
    echo $API->getGalleryById($productId);
} else {
    echo "Thiếu thông tin sản phẩm.";
}
