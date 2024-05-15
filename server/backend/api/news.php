<?php phpinfo(); ?>
<?php
require_once __DIR__ . "/../config/dbconfig.php";
require "../config/request_config.php";


class API
{
    function getAllNews()
    {
        $db = new Connect;
        $data = [];

        $query = $db->prepare("SELECT * FROM table_news ORDER BY stt ASC");
        $query->execute();

        while ($result = $query->fetch(PDO::FETCH_ASSOC)) {
            $news_photo = array(
                'id' => $result['id'],
                'stt' => $result['stt'],
                'title' => $result['tenvi'],
                'photo' => $result['photo'],
                'noibat' => $result['noibat'],
                'ngaytao' => $result['ngaytao'],
                // 'category_name' => $result['category_name']
            );
            array_push($data, $news_photo);
        }

        return json_encode($data);
    }
}
$API = new API;
header('Content-Type: application/json');
echo $API->getAllNews();
