<?php phpinfo(); ?>
<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";

class API
{
    function getAllProduct()
    {
        $db = new Connect;
        $data = [];
        $product = array();
        $query = $db->prepare("SELECT * FROM table_product");
        $query->execute();
        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $product = array(
                'id' => $result['id'],
                'id_list' => $result['id_list'],
                'tenvi' => $result['tenvi'],
                'gia' => $result['gia'],
                'giamoi' => $result['giamoi'],
                'giakm' => $result['giakm'],
                'photo' => $result['photo'],
                'mota' => $result['motavi'],
            );
            array_push($data, $product);
        }


        return json_encode($data);
    }
}

$API = new API;
header('Content-Type: application/json');
echo $API->getAllProduct();


// <?php
// require_once __DIR__ . "/../../config/dbconfig.php";
// require "../config/request_config.php";

// class API
// {
//     function getAllProduct($filters = array())
//     {
//         $db = new Connect;
//         $data = [];
//         $product = array();

//         // Bắt đầu câu truy vấn SQL
//         $query = "SELECT * FROM table_product WHERE 1=1";

//         // Xử lý các điều kiện lọc
//         if (!empty($filters)) {
//             foreach ($filters as $key => $value) {
//                 // Kiểm tra giá trị của $value có phải là một mảng không (cho các trường hợp lọc theo nhiều giá trị)
//                 if (is_array($value)) {
//                     // Sử dụng IN để lọc các giá trị trong mảng
//                     $query .= " AND $key IN ('" . implode("','", $value) . "')";
//                 } else {
//                     // Sử dụng '=' để lọc các giá trị đơn lẻ
//                     $query .= " AND $key = '$value'";
//                 }
//             }
//         }

//         // Thực thi câu truy vấn
//         $stmt = $db->prepare($query);
//         $stmt->execute();

//         // Lấy dữ liệu và đưa vào mảng kết quả
//         while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
//             $product = array(
//                 'id' => $result['id'],
//                 'id_list' => $result['id_list'],
//                 'tenvi' => $result['tenvi'],
//                 'gia' => $result['gia'],
//                 'giamoi' => $result['giamoi'],
//                 'giakm' => $result['giakm'],
//                 'photo' => $result['photo'],
//                 'mota' => $result['motavi'],
//             );
//             array_push($data, $product);
//         }

//         // Trả về dữ liệu dưới dạng JSON
//         return json_encode($data);
//     }
// }

// // Khởi tạo đối tượng API
// $API = new API;

// // Lấy tham số từ query string
// $filters = $_GET;

// // Lấy dữ liệu sản phẩm và trả về dưới dạng JSON
// header('Content-Type: application/json');
// echo $API->getAllProduct($filters);
