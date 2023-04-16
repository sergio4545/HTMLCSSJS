<?php
    //Получаем данные из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Если данные успешно получены и содержат ключ "jsonTasks"
if (isset($data['jsonTasks'])) {
    // Устанавливаем соединение с базой данных
    $connection = mysqli_connect('localhost', 'root', '', 'tasks');

    // Обрабатываем данные и готовим их к добавлению в таблицу
    $task = mysqli_real_escape_string($connection, $data['jsonTasks']);

    // Добавляем задачу в таблицу
    $query = "INSERT INTO daytasks (task) VALUES ('$task')";
    $result = mysqli_query($connection, $query);

    // Проверяем, что задача была успешно добавлена
    if ($result) {
      echo 'Задача успешно добавлена!';
    } else {
      echo 'Ошибка добавления задачи';
    }

    // Закрываем соединение с базой данных
    mysqli_close($connection);
} else {
  echo 'Нет данных для добавления задачи';
}


?>