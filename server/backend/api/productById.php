<?php phpinfo(); ?>
<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getProductByID($productId)
    {
        $db = new Connect;
        // $product = [];
        $query = $db->prepare("SELECT table_product.id, table_product.id_list,table_product.tenvi, table_product.motavi, table_product.photo, table_product.gia, table_product.giamoi, table_product_brand.tenvi as namebrand FROM table_product INNER JOIN table_product_brand ON table_product.id_brand = table_product_brand.id    WHERE table_product.id = :productId");
        $query->bindParam(':productId', $productId, PDO::PARAM_INT);
        $query->execute();

        $result = $query->fetch(PDO::FETCH_ASSOC);
        // array_push($product, $result);

        return json_encode($result);
    }
}

$API = new API;

if (isset($_GET['id'])) {
    $productId = $_GET['id'];
    header('Content-Type: application/json');
    echo $API->getProductByID($productId);
} else {
    echo "Thiếu thông tin sản phẩm.";
}
