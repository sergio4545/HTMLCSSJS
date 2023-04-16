<?php
$pdo = new PDO('mysql:host=localhost;dbname=tasks', 'root', '');

$stmt = $pdo->query('SELECT * FROM tasks.daytasks');
$getData = $stmt->fetchAll(PDO::FETCH_ASSOC);
//проверяем масив на пустоту
if (empty($getData)) {
  $jsonData = json_encode(array('message' => 'No data found'));
} else {
  $jsonData = json_encode($getData, JSON_UNESCAPED_UNICODE);
}

echo $jsonData;
?>